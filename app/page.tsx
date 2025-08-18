import { Search, Settings, Grid3X3, User, HelpCircle, Plus, Home, Activity, Users, Folder, Share, Clock, Star, Trash, Database } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

export default function Drive() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="flex items-center justify-between px-4 py-2 bg-white border-b">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
              <div className="w-5 h-5 bg-yellow-400 rounded-full"></div>
            </div>
            <span className="text-xl text-gray-700 font-medium">Vaia</span>
          </div>
        </div>

        <div className="flex-1 max-w-2xl mx-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              type="text"
              placeholder="Search in Vaia"
              className="w-full pl-10 pr-4 py-2 bg-gray-100 border-none focus:bg-white focus:shadow-md transition-all"
            />
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="icon">
            <HelpCircle className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <Settings className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <Grid3X3 className="w-5 h-5" />
          </Button>
          <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
            <User className="w-5 h-5 text-white" />
          </div>
        </div>
      </header>

      <div className="flex">
        <aside className="w-64 bg-white h-screen sticky top-0 border-r">
          <div className="p-4">
            <Button className="flex items-center space-x-3 w-full justify-start rounded-2xl shadow-sm" variant="outline">
              <Plus className="w-6 h-6" />
              <span className="font-medium">New</span>
            </Button>
          </div>

          <nav className="px-2">
            <div className="space-y-1">
              <Button variant="ghost" className="flex items-center space-x-3 w-full justify-start px-3 py-2 text-blue-600 bg-blue-50 rounded-r-full hover:bg-blue-50">
                <Home className="w-5 h-5" />
                <span className="font-medium">Home</span>
              </Button>
              <Button variant="ghost" className="flex items-center space-x-3 w-full justify-start px-3 py-2 text-gray-700 rounded-r-full">
                <Activity className="w-5 h-5" />
                <span>Activity</span>
              </Button>
              <Button variant="ghost" className="flex items-center space-x-3 w-full justify-start px-3 py-2 text-gray-700 rounded-r-full">
                <Users className="w-5 h-5" />
                <span>Workspaces</span>
              </Button>
            </div>

            <div className="mt-6 space-y-1">
              <Button variant="ghost" className="flex items-center space-x-3 w-full justify-start px-3 py-2 text-gray-700 rounded-r-full">
                <Folder className="w-5 h-5" />
                <span>My Vaia</span>
              </Button>
              <Button variant="ghost" className="flex items-center space-x-3 w-full justify-start px-3 py-2 text-gray-700 rounded-r-full">
                <Share className="w-5 h-5" />
                <span>Shared drives</span>
              </Button>
              <Button variant="ghost" className="flex items-center space-x-3 w-full justify-start px-3 py-2 text-gray-700 rounded-r-full">
                <Users className="w-5 h-5" />
                <span>Shared with me</span>
              </Button>
              <Button variant="ghost" className="flex items-center space-x-3 w-full justify-start px-3 py-2 text-gray-700 rounded-r-full">
                <Clock className="w-5 h-5" />
                <span>Recent</span>
              </Button>
              <Button variant="ghost" className="flex items-center space-x-3 w-full justify-start px-3 py-2 text-gray-700 rounded-r-full">
                <Star className="w-5 h-5" />
                <span>Starred</span>
              </Button>
              <Button variant="ghost" className="flex items-center space-x-3 w-full justify-start px-3 py-2 text-gray-700 rounded-r-full">
                <Trash className="w-5 h-5" />
                <span>Trash</span>
              </Button>
            </div>

            <div className="mt-6">
              <Button variant="ghost" className="flex items-center space-x-3 w-full justify-start px-3 py-2 text-gray-700 rounded-r-full">
                <Database className="w-5 h-5" />
                <span>Storage</span>
              </Button>
              <div className="px-3 text-xs text-gray-500 mt-1">15 GB of 15 GB used</div>
            </div>
          </nav>
        </aside>

        <main className="flex-1 p-6">
          <div className="max-w-6xl">
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-2xl font-normal text-gray-900">Welcome to Vaia</h1>
              <div className="w-6 h-6 text-gray-400">
                <HelpCircle className="w-6 h-6" />
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-lg font-medium text-blue-600 mb-4 flex items-center">
                <span className="mr-2">✨</span>
                Start creating
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Link href="/logo">
                  <Card className="hover:shadow-md transition-shadow cursor-pointer">
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-6 h-6 bg-orange-500 rounded flex items-center justify-center">
                          <span className="text-white text-xs font-bold">L</span>
                        </div>
                        <span className="text-gray-700 font-medium">Logo Project</span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
                <Card className="hover:shadow-md transition-shadow cursor-pointer">
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-purple-500 rounded flex items-center justify-center">
                        <span className="text-white text-xs font-bold">P</span>
                      </div>
                      <span className="text-gray-700 font-medium">Design a poster</span>
                    </div>
                  </CardContent>
                </Card>
                <Card className="hover:shadow-md transition-shadow cursor-pointer">
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-green-500 rounded flex items-center justify-center">
                        <span className="text-white text-xs font-bold">M</span>
                      </div>
                      <span className="text-gray-700 font-medium">Physical mockups</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
              <div className="mt-4">
                <Card className="hover:shadow-md transition-shadow cursor-pointer inline-block">
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-blue-500 rounded flex items-center justify-center">
                        <span className="text-white text-xs font-bold">C</span>
                      </div>
                      <span className="text-gray-700 font-medium">Generate company names</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-lg font-medium text-gray-900 mb-4 flex items-center">
                <span className="mr-2">📁</span>
                Suggested folders
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card className="hover:shadow-md transition-shadow cursor-pointer">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <Folder className="w-6 h-6 text-blue-500" />
                        <div>
                          <div className="font-medium text-gray-900">Brand Assets</div>
                          <div className="text-sm text-gray-500">In My Vaia</div>
                        </div>
                      </div>
                      <Button variant="ghost" size="icon" className="text-gray-400 hover:text-gray-600">
                        <span>⋮</span>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
                <Card className="hover:shadow-md transition-shadow cursor-pointer">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <Folder className="w-6 h-6 text-blue-500" />
                        <div>
                          <div className="font-medium text-gray-900">Marketing Materials</div>
                          <div className="text-sm text-gray-500">In Shared with me</div>
                        </div>
                      </div>
                      <Button variant="ghost" size="icon" className="text-gray-400 hover:text-gray-600">
                        <span>⋮</span>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
                <Card className="hover:shadow-md transition-shadow cursor-pointer">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <Folder className="w-6 h-6 text-blue-500" />
                        <div>
                          <div className="font-medium text-gray-900">Product Mockups</div>
                          <div className="text-sm text-gray-500">In My Vaia</div>
                        </div>
                      </div>
                      <Button variant="ghost" size="icon" className="text-gray-400 hover:text-gray-600">
                        <span>⋮</span>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div>
              <h2 className="text-lg font-medium text-gray-900 mb-4 flex items-center">
                <span className="mr-2">📄</span>
                Suggested files
              </h2>
              <Card>
                <CardContent className="p-0">
                  <div className="p-4 border-b border-gray-200">
                    <div className="flex justify-between items-center">
                      <div className="flex space-x-4 text-sm text-gray-500">
                        <span>Name</span>
                        <span>Reason suggested</span>
                        <span>Owner</span>
                        <span>Location</span>
                      </div>
                      <div className="flex space-x-2">
                        <Button variant="ghost" size="icon">
                          <Grid3X3 className="w-4 h-4 text-gray-500" />
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="divide-y divide-gray-200">
                    <div className="p-4 hover:bg-gray-50 cursor-pointer">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="w-6 h-6 bg-orange-500 rounded flex items-center justify-center">
                            <span className="text-white text-xs font-bold">L</span>
                          </div>
                          <span className="font-medium text-gray-900">Company Logo Draft</span>
                        </div>
                        <div className="flex space-x-16 text-sm text-gray-500">
                          <span>You edited • Yesterday</span>
                          <span>me</span>
                          <span>My Vaia</span>
                        </div>
                        <Button variant="ghost" size="icon" className="text-gray-400 hover:text-gray-600">
                          <span>⋮</span>
                        </Button>
                      </div>
                    </div>
                    <div className="p-4 hover:bg-gray-50 cursor-pointer">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="w-6 h-6 bg-purple-500 rounded flex items-center justify-center">
                            <span className="text-white text-xs font-bold">P</span>
                          </div>
                          <span className="font-medium text-gray-900">Product Launch Poster</span>
                        </div>
                        <div className="flex space-x-16 text-sm text-gray-500">
                          <span>You opened • 2 days ago</span>
                          <span>me</span>
                          <span>My Vaia</span>
                        </div>
                        <Button variant="ghost" size="icon" className="text-gray-400 hover:text-gray-600">
                          <span>⋮</span>
                        </Button>
                      </div>
                    </div>
                    <div className="p-4 hover:bg-gray-50 cursor-pointer">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="w-6 h-6 bg-green-500 rounded flex items-center justify-center">
                            <span className="text-white text-xs font-bold">M</span>
                          </div>
                          <span className="font-medium text-gray-900">T-Shirt Mockup Collection</span>
                        </div>
                        <div className="flex space-x-16 text-sm text-gray-500">
                          <span>You edited • 3 days ago</span>
                          <span>me</span>
                          <span>Shared with me</span>
                        </div>
                        <Button variant="ghost" size="icon" className="text-gray-400 hover:text-gray-600">
                          <span>⋮</span>
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
