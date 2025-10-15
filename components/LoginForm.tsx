import { useState, useRef, useEffect } from "react";
// import { Navigate } from 'react-router-dom';
import { gsap } from "gsap";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Eye, EyeOff, Lock, Mail } from "lucide-react";

const LoginForm = () => {
  // const { theme } = useTheme();
  const theme = "dark";
  const [email, setEmail] = useState("admin@example.com");
  const [password, setPassword] = useState("admin123");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  // const { login, isAuthenticated } = useAuth();
  // const { toast } = useToast();
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(formRef.current, {
        scale: 0.9,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      });

      gsap.from(".form-field", {
        y: 20,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        delay: 0.3,
        ease: "power2.out",
      });
    }, formRef);

    return () => ctx.revert();
  }, []);

  // if (isAuthenticated) {
  //   // return <Navigate to="/admin" replace />;
  // }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // await login(email, password);
      // toast({
      //   title: "Login successful!",
      //   description: "Welcome to the admin dashboard.",
      // });
    } catch (error) {
      console.log(error);
      // toast({
      //   title: "Login failed",
      //   description: "Please check your credentials and try again.",
      //   variant: "destructive",
      // });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div ref={formRef} className="w-full max-w-md mx-auto">
      <Card
        className={`${
          theme === "dark"
            ? "bg-gray-900/50 border-gray-700"
            : "bg-white/80 border-gray-200"
        } backdrop-blur-sm shadow-xl`}
      >
        <CardHeader className="space-y-1 text-center">
          <CardTitle
            className={`text-2xl font-light ${
              theme === "dark" ? "text-white" : "text-black"
            }`}
          >
            Admin Login
          </CardTitle>
          <p
            className={`text-sm ${
              theme === "dark" ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Enter your credentials to access the dashboard
          </p>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="form-field space-y-2">
              <label
                htmlFor="email"
                className={`text-sm font-medium ${
                  theme === "dark" ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Email
              </label>
              <div className="relative">
                <Mail
                  className={`absolute left-3 top-3 h-4 w-4 ${
                    theme === "dark" ? "text-gray-400" : "text-gray-500"
                  }`}
                />
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@example.com"
                  required
                  className={`pl-10 h-12 ${
                    theme === "dark"
                      ? "bg-gray-800/50 border-gray-600 text-white placeholder-gray-400 focus:border-red-500 focus:ring-red-500"
                      : "bg-gray-50 border-gray-300 text-black placeholder-gray-500 focus:border-blue-500 focus:ring-blue-500"
                  }`}
                />
              </div>
            </div>

            <div className="form-field space-y-2">
              <label
                htmlFor="password"
                className={`text-sm font-medium ${
                  theme === "dark" ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Password
              </label>
              <div className="relative">
                <Lock
                  className={`absolute left-3 top-3 h-4 w-4 ${
                    theme === "dark" ? "text-gray-400" : "text-gray-500"
                  }`}
                />
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                  className={`pl-10 pr-10 h-12 ${
                    theme === "dark"
                      ? "bg-gray-800/50 border-gray-600 text-white placeholder-gray-400 focus:border-red-500 focus:ring-red-500"
                      : "bg-gray-50 border-gray-300 text-black placeholder-gray-500 focus:border-blue-500 focus:ring-blue-500"
                  }`}
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className={`absolute right-3 top-3 ${
                    theme === "dark"
                      ? "text-gray-400 hover:text-gray-300"
                      : "text-gray-500 hover:text-gray-700"
                  } transition-colors`}
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </button>
              </div>
            </div>

            <div className="form-field">
              <Button
                type="submit"
                disabled={isLoading}
                className={`w-full h-12 font-medium transition-all duration-200 ${
                  theme === "dark"
                    ? "bg-red-600 hover:bg-red-700 text-white"
                    : "bg-blue-600 hover:bg-blue-700 text-white"
                } disabled:opacity-50 disabled:cursor-not-allowed`}
              >
                {isLoading ? (
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Signing in...</span>
                  </div>
                ) : (
                  "Sign In"
                )}
              </Button>
            </div>
          </form>

          <div
            className={`mt-6 text-center text-xs ${
              theme === "dark" ? "text-gray-500" : "text-gray-500"
            }`}
          >
            <p>Demo Credentials:</p>
            <p className={theme === "dark" ? "text-gray-400" : "text-gray-600"}>
              Email: admin@example.com | Password: admin123
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default LoginForm;
