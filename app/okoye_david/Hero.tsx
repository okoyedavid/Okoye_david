"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { LogOut, Mail, Shield, User } from "lucide-react";
import { RefObject } from "react";
export default function Hero({
  heroRef,
}: {
  heroRef: RefObject<HTMLDivElement | null>;
}) {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div ref={heroRef} className="text-center lg:text-left">
          {/* Header */}
          <div className="mb-8 flex flex-col lg:flex-row lg:items-center lg:justify-between">
            <div>
              <span
                className={`text-sm uppercase tracking-wider 
                           dark:text-red-500 text-blue-600
                          font-semibold`}
              >
                {" // Dashboard"}
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light leading-none mt-4 mb-2">
                Content Manager
              </h1>
              <p
                className={`text-xl
                           dark:text-gray-400 text-gray-600
                          `}
              >
                Welcome back, Okoye david
              </p>
            </div>

            <Button
              // onClick={handleLogout}
              variant="outline"
              className={`mt-6 lg:mt-0 
                          dark:border-gray-600 dark:text-gray-300 dark:hover:bg-red-600 dark:hover:border-red-600 dark:hover:text-white
                            border-gray-300 text-gray-700 hover:bg-red-600 hover:border-red-600 hover:text-white
                        }`}
            >
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </Button>
          </div>

          {/* User Info Card */}
          <Card
            className={`admin-card   
                        dark:bg-gray-900 dark:border-gray-700
                          bg-gray-50 border-gray-200
                     p-6 mb-12`}
          >
            <div className="flex items-start space-x-4">
              <div
                className={`w-16 h-16
                           dark:bg-red-600/10 bg-blue-600/10
                          rounded-lg flex items-center justify-center`}
              >
                <User
                  className={`w-8 h-8 
                             dark:text-red-500" : "text-blue-600"
                            `}
                />
              </div>
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-2">
                  <h2
                    className={`text-xl font-medium 
                               dark:text-white text-black
                              `}
                  >
                    Okoye David
                  </h2>
                  <Badge variant={"destructive"}>Admin</Badge>
                </div>
                <div
                  className={`flex items-center space-x-2 
                          dark:text-gray-400 text-gray-600
                             mb-2`}
                >
                  <Mail className="w-4 h-4" />
                  <span>OkoyeDav7@gmail.com</span>
                </div>
                <div
                  className={`flex items-center space-x-2 
                              dark:text-gray-400 text-gray-600"
                            `}
                >
                  <Shield className="w-4 h-4" />
                  <span>User ID: 1234354893849</span>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
