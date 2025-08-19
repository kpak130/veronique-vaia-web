"use client";

import { Search, Settings, Grid3X3, User, HelpCircle, Plus, Home, Activity, Users, Folder, Share, Clock, Star, Trash, Database, Globe, History, Lock, Sparkles, Image, Palette, Lightbulb, MessageCircle, Cloud } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { useState } from "react";
import { BRAND_COLORS } from "@/lib/theme";

export default function Drive() {
  const [activeProjectTab, setActiveProjectTab] = useState<'recents' | 'public' | 'team' | 'private'>('recents');

  const privateProjects = [
    { category: 'Logos', name: 'Tech Startup Logo Design', activity: 'You edited • Yesterday', owner: 'me', shared: 'My Vaia' },
    { category: 'Logos', name: 'Coffee Shop Branding', activity: 'You opened • 2 days ago', owner: 'me', shared: 'My Vaia' },
    { category: 'Logos', name: 'Fitness Brand Logo', activity: 'You edited • 3 days ago', owner: 'me', shared: 'My Vaia' },
    { category: 'Posters', name: 'Summer Music Festival Poster', activity: 'You created • 4 days ago', owner: 'me', shared: 'My Vaia' },
    { category: 'Marketing', name: 'Social Media Campaign Assets', activity: 'You created • 1 week ago', owner: 'me', shared: 'My Vaia' },
    { category: 'Mockups', name: 'T-Shirt Mockup Collection', activity: 'You edited • 3 weeks ago', owner: 'me', shared: 'My Vaia' },
    { category: 'Names', name: 'Tech Startup Name Ideas', activity: 'You created • 1 month ago', owner: 'me', shared: 'My Vaia' },
  ];

  const teamProjects = [
    { category: 'Posters', name: 'Product Launch Event', activity: 'Team edited • 5 days ago', owner: 'Design Team', shared: 'Team Workspace' },
    { category: 'Posters', name: 'Art Exhibition Announcement', activity: 'Sarah edited • 1 week ago', owner: 'Marketing Team', shared: 'Team Workspace' },
    { category: 'Marketing', name: 'Email Newsletter Content', activity: 'John edited • 2 weeks ago', owner: 'Content Team', shared: 'Team Workspace' },
    { category: 'Marketing', name: 'Product Catalog Images', activity: 'Team opened • 2 weeks ago', owner: 'Marketing Team', shared: 'Team Workspace' },
    { category: 'Mockups', name: 'Business Card Presentations', activity: 'Alex created • 1 month ago', owner: 'Design Team', shared: 'Team Workspace' },
    { category: 'Mockups', name: 'Packaging Design Mockups', activity: 'Team opened • 1 month ago', owner: 'Product Team', shared: 'Team Workspace' },
  ];

  const publicProjects = [
    { category: 'Logos', name: 'Open Source Project Logo', activity: 'Community edited • 2 days ago', owner: 'Community', shared: 'Public Gallery' },
    { category: 'Posters', name: 'Public Health Campaign', activity: 'Contributors added • 1 week ago', owner: 'Health Org', shared: 'Public Gallery' },
    { category: 'Marketing', name: 'Environmental Awareness Content', activity: 'Community created • 2 weeks ago', owner: 'Green Initiative', shared: 'Public Gallery' },
    { category: 'Names', name: 'Restaurant Brand Names', activity: 'Public edited • 2 months ago', owner: 'Community', shared: 'Public Gallery' },
    { category: 'Mockups', name: 'Nonprofit Event Materials', activity: 'Volunteers created • 3 weeks ago', owner: 'Nonprofit Org', shared: 'Public Gallery' },
  ];

  const recentProjects = [
    { category: 'Logos', name: 'Tech Startup Logo Design', activity: 'You edited • Yesterday', owner: 'me', shared: 'My Vaia' },
    { category: 'Posters', name: 'Product Launch Event', activity: 'Team edited • 5 days ago', owner: 'Design Team', shared: 'Team Workspace' },
    { category: 'Logos', name: 'Coffee Shop Branding', activity: 'You opened • 2 days ago', owner: 'me', shared: 'My Vaia' },
    { category: 'Marketing', name: 'Social Media Campaign Assets', activity: 'You created • 1 week ago', owner: 'me', shared: 'My Vaia' },
    { category: 'Logos', name: 'Open Source Project Logo', activity: 'Community edited • 2 days ago', owner: 'Community', shared: 'Public Gallery' },
    { category: 'Posters', name: 'Art Exhibition Announcement', activity: 'Sarah edited • 1 week ago', owner: 'Marketing Team', shared: 'Team Workspace' },
    { category: 'Marketing', name: 'Email Newsletter Content', activity: 'John edited • 2 weeks ago', owner: 'Content Team', shared: 'Team Workspace' },
    { category: 'Mockups', name: 'T-Shirt Mockup Collection', activity: 'You edited • 3 weeks ago', owner: 'me', shared: 'My Vaia' },
  ];

  const getCurrentProjects = () => {
    switch (activeProjectTab) {
      case 'recents': return recentProjects;
      case 'public': return publicProjects;
      case 'team': return teamProjects;
      case 'private': return privateProjects;
      default: return recentProjects;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Logos': return { bg: BRAND_COLORS.coral, text: 'white' };
      case 'Posters': return { bg: BRAND_COLORS.darkBlue, text: 'white' };
      case 'Marketing': return { bg: BRAND_COLORS.lime, text: BRAND_COLORS.darkBlue };
      case 'Mockups': return { bg: BRAND_COLORS.blue, text: 'white' };
      case 'Names': return { bg: BRAND_COLORS.coral, text: 'white' };
      default: return { bg: BRAND_COLORS.blue, text: 'white' };
    }
  };
  return (
    <div className="min-h-screen" style={{ backgroundColor: BRAND_COLORS.lightGray }}>
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 py-2 bg-white border-b">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: BRAND_COLORS.darkBlue }}>
              <div className="w-5 h-5 rounded-full" style={{ backgroundColor: BRAND_COLORS.lime }}></div>
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
          <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: BRAND_COLORS.blue }}>
            <User className="w-5 h-5 text-white" />
          </div>
        </div>
      </header>

      <div className="flex pt-14">
        <aside className="w-64 bg-white fixed top-14 left-0 border-r flex flex-col h-[calc(100vh-3.5rem)]">
          <div className="p-4 flex-shrink-0">
            <Button className="flex items-center space-x-3 w-full justify-start rounded-2xl shadow-sm" variant="outline">
              <Plus className="w-6 h-6" />
              <span className="font-medium">Create New</span>
            </Button>
          </div>

          <nav className="px-2 flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
            <div className="pb-6">
              {/* Core Navigation */}
              <div className="space-y-1">
              <Button variant="ghost" className="flex items-center space-x-3 w-full justify-start px-3 py-2 rounded-r-full" style={{ color: BRAND_COLORS.blue, backgroundColor: `${BRAND_COLORS.blue}15` }}>
                <Home className="w-5 h-5" />
                <span className="font-medium">Home</span>
              </Button>
              <Button variant="ghost" className="flex items-center space-x-3 w-full justify-start px-3 py-2 text-gray-700 rounded-r-full">
                <Sparkles className="w-5 h-5" />
                <span>Create</span>
              </Button>
              <Button variant="ghost" className="flex items-center space-x-3 w-full justify-start px-3 py-2 text-gray-700 rounded-r-full">
                <Folder className="w-5 h-5" />
                <span>Projects</span>
              </Button>
              <Button variant="ghost" className="flex items-center space-x-3 w-full justify-start px-3 py-2 text-gray-700 rounded-r-full">
                <Clock className="w-5 h-5" />
                <span>Recent</span>
              </Button>
              <Button variant="ghost" className="flex items-center space-x-3 w-full justify-start px-3 py-2 text-gray-700 rounded-r-full">
                <Star className="w-5 h-5" />
                <span>Favorites</span>
              </Button>
            </div>

            {/* Creative Resources */}
            <div className="mt-6 space-y-1">
              <div className="px-3 py-2 text-xs font-medium text-gray-500 uppercase tracking-wide">
                Resources
              </div>
              <Button variant="ghost" className="flex items-center space-x-3 w-full justify-start px-3 py-2 text-gray-700 rounded-r-full">
                <Grid3X3 className="w-5 h-5" />
                <span>Templates</span>
              </Button>
              <Button variant="ghost" className="flex items-center space-x-3 w-full justify-start px-3 py-2 text-gray-700 rounded-r-full">
                <Image className="w-5 h-5" />
                <span>Assets</span>
              </Button>
              <Button variant="ghost" className="flex items-center space-x-3 w-full justify-start px-3 py-2 text-gray-700 rounded-r-full">
                <Palette className="w-5 h-5" />
                <span>Brand Kits</span>
              </Button>
              <Button variant="ghost" className="flex items-center space-x-3 w-full justify-start px-3 py-2 text-gray-700 rounded-r-full">
                <Lightbulb className="w-5 h-5" />
                <span>Inspiration</span>
              </Button>
            </div>

            {/* Collaboration */}
            <div className="mt-6 space-y-1">
              <div className="px-3 py-2 text-xs font-medium text-gray-500 uppercase tracking-wide">
                Collaboration
              </div>
              <Button variant="ghost" className="flex items-center space-x-3 w-full justify-start px-3 py-2 text-gray-700 rounded-r-full">
                <Users className="w-5 h-5" />
                <span>Team Workspace</span>
              </Button>
              <Button variant="ghost" className="flex items-center space-x-3 w-full justify-start px-3 py-2 text-gray-700 rounded-r-full">
                <Share className="w-5 h-5" />
                <span>Shared with me</span>
              </Button>
              <Button variant="ghost" className="flex items-center space-x-3 w-full justify-start px-3 py-2 text-gray-700 rounded-r-full">
                <MessageCircle className="w-5 h-5" />
                <span>Comments</span>
              </Button>
            </div>

            {/* Management */}
            <div className="mt-6 space-y-1">
              <div className="px-3 py-2 text-xs font-medium text-gray-500 uppercase tracking-wide">
                Management
              </div>
              <Button variant="ghost" className="flex items-center space-x-3 w-full justify-start px-3 py-2 text-gray-700 rounded-r-full">
                <Trash className="w-5 h-5" />
                <span>Trash</span>
              </Button>
              <Button variant="ghost" className="flex items-center space-x-3 w-full justify-start px-3 py-2 text-gray-700 rounded-r-full">
                <Cloud className="w-5 h-5" />
                <span>Storage</span>
              </Button>
              <div className="px-3 text-xs text-gray-500 mt-1">15 GB of 15 GB used</div>
            </div>
            </div>
          </nav>
        </aside>

        <main className="flex-1 p-6 ml-64">
          <div className="max-w-6xl">
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-2xl font-normal text-gray-900">Welcome to Vaia</h1>
              <div className="w-6 h-6 text-gray-400">
                <HelpCircle className="w-6 h-6" />
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-lg font-medium mb-4 flex items-center" style={{ color: BRAND_COLORS.blue }}>
                <span className="mr-2">✨</span>
                Start creating
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Link href="/dashboard/logo">
                  <Card className="hover:shadow-md transition-shadow cursor-pointer">
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-6 h-6 rounded flex items-center justify-center" style={{ backgroundColor: BRAND_COLORS.coral }}>
                          <span className="text-white text-xs font-bold">L</span>
                        </div>
                        <span className="text-gray-700 font-medium">Logos</span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
                <Link href="/dashboard/posters">
                  <Card className="hover:shadow-md transition-shadow cursor-pointer">
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-6 h-6 rounded flex items-center justify-center" style={{ backgroundColor: BRAND_COLORS.darkBlue }}>
                          <span className="text-white text-xs font-bold">P</span>
                        </div>
                        <span className="text-gray-700 font-medium">Posters</span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
                <Link href="/dashboard/images-text">
                  <Card className="hover:shadow-md transition-shadow cursor-pointer">
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-6 h-6 rounded flex items-center justify-center" style={{ backgroundColor: BRAND_COLORS.lime }}>
                          <span className="text-xs font-bold" style={{ color: BRAND_COLORS.darkBlue }}>I</span>
                        </div>
                        <span className="text-gray-700 font-medium">Marketing images / text</span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
                <Card className="hover:shadow-md transition-shadow cursor-pointer">
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 rounded flex items-center justify-center" style={{ backgroundColor: BRAND_COLORS.blue }}>
                        <span className="text-white text-xs font-bold">M</span>
                      </div>
                      <span className="text-gray-700 font-medium">Physical mockups</span>
                    </div>
                  </CardContent>
                </Card>
                <Card className="hover:shadow-md transition-shadow cursor-pointer">
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 rounded flex items-center justify-center" style={{ backgroundColor: BRAND_COLORS.coral }}>
                        <span className="text-white text-xs font-bold">C</span>
                      </div>
                      <span className="text-gray-700 font-medium">Brand names & slogans</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div>
              <h2 className="text-lg font-medium text-gray-900 mb-4 flex items-center">
                <span className="mr-2">📄</span>
                Projects
              </h2>
              
              {/* Project Tabs */}
              <div className="mb-4">
                <div className="flex space-x-1 bg-gray-100 rounded-lg p-1 w-fit">
                  <button
                    onClick={() => setActiveProjectTab('recents')}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-all flex items-center space-x-2`}
                    style={{
                      backgroundColor: activeProjectTab === 'recents' ? 'white' : 'transparent',
                      color: activeProjectTab === 'recents' ? BRAND_COLORS.darkBlue : '#6B7280'
                    }}
                  >
                    <History className="w-4 h-4" />
                    <span>Recents</span>
                  </button>
                  <button
                    onClick={() => setActiveProjectTab('public')}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-all flex items-center space-x-2`}
                    style={{
                      backgroundColor: activeProjectTab === 'public' ? 'white' : 'transparent',
                      color: activeProjectTab === 'public' ? BRAND_COLORS.darkBlue : '#6B7280'
                    }}
                  >
                    <Globe className="w-4 h-4" />
                    <span>Public</span>
                  </button>
                  <button
                    onClick={() => setActiveProjectTab('team')}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-all flex items-center space-x-2`}
                    style={{
                      backgroundColor: activeProjectTab === 'team' ? 'white' : 'transparent',
                      color: activeProjectTab === 'team' ? BRAND_COLORS.darkBlue : '#6B7280'
                    }}
                  >
                    <Users className="w-4 h-4" />
                    <span>Team</span>
                  </button>
                  <button
                    onClick={() => setActiveProjectTab('private')}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-all flex items-center space-x-2`}
                    style={{
                      backgroundColor: activeProjectTab === 'private' ? 'white' : 'transparent',
                      color: activeProjectTab === 'private' ? BRAND_COLORS.darkBlue : '#6B7280'
                    }}
                  >
                    <Lock className="w-4 h-4" />
                    <span>Private</span>
                  </button>
                </div>
              </div>
              
              <Card>
                <CardContent className="p-0">
                  <div className="p-4 border-b border-gray-200">
                    <div className="flex justify-between items-center">
                      <div className="flex space-x-4 text-sm text-gray-500">
                        <span>Name</span>
                        <span>Last Activity</span>
                        <span>Owner</span>
                        <span>Shared</span>
                      </div>
                      <div className="flex space-x-2">
                        <Button variant="ghost" size="icon">
                          <Grid3X3 className="w-4 h-4 text-gray-500" />
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="divide-y divide-gray-200">
                    {getCurrentProjects().map((project, index) => {
                      const categoryColors = getCategoryColor(project.category);
                      return (
                        <div key={index} className="p-4 hover:bg-gray-50 cursor-pointer">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                              <span 
                                className="px-2 py-1 text-xs font-medium rounded-full" 
                                style={{ backgroundColor: categoryColors.bg, color: categoryColors.text }}
                              >
                                {project.category}
                              </span>
                              <span className="font-medium text-gray-900">{project.name}</span>
                            </div>
                            <div className="flex space-x-16 text-sm text-gray-500">
                              <span>{project.activity}</span>
                              <span>{project.owner}</span>
                              <span>{project.shared}</span>
                            </div>
                            <Button variant="ghost" size="icon" className="text-gray-400 hover:text-gray-600">
                              <span>⋮</span>
                            </Button>
                          </div>
                        </div>
                      );
                    })}
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
