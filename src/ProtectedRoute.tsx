import React, { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import { Navigate } from 'react-router-dom';
import { Loader2 } from 'lucide-react';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl, supabaseAnonKey);

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const [session, setSession] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setSession(session);
      setLoading(false);
    };

    getSession();

    const { data: authListener } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      setLoading(false);
    });

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
        <Loader2 className="w-10 h-10 animate-spin text-blue-500" />
        <p className="text-gray-700 dark:text-gray-300 ml-3">Loading...</p>
      </div>
    );
  }

  if (!session) {
    return <Navigate to="/AdminLogin" replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;