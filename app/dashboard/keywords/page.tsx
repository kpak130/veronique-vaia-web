"use client";

import { Search, Settings, Grid3X3, User, HelpCircle, Plus, Edit3, Copy, Trash2, Tag, Calendar, MoreVertical, Home, Activity, Users, Folder, Share, Clock, Star, Trash, Database, Globe, History, Lock, Sparkles, Image, Palette, Lightbulb, MessageCircle, Cloud } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { useState } from "react";
import { BRAND_COLORS } from "@/lib/theme";

export default function KeywordsPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const keywordSets = [
    {
      id: 1,
      name: "Tech Startup Keywords",
      description: "Keywords for technology and startup related content",
      keywords: ["innovation", "startup", "technology", "digital", "AI", "SaaS", "cloud", "disruption", "scalable", "entrepreneur"],
      count: 10,
      lastUpdated: "2 days ago",
      category: "Business"
    },
    {
      id: 2,
      name: "Food & Restaurant",
      description: "Keywords for food industry and restaurant marketing",
      keywords: ["delicious", "fresh", "organic", "gourmet", "authentic", "homemade", "seasonal", "local", "artisan", "culinary"],
      count: 10,
      lastUpdated: "1 week ago",
      category: "Food"
    },
    {
      id: 3,
      name: "Health & Wellness",
      description: "Keywords for health and wellness content",
      keywords: ["healthy", "wellness", "fitness", "natural", "mindful", "balance", "energy", "vitality", "strength", "nutrition"],
      count: 10,
      lastUpdated: "3 days ago",
      category: "Health"
    },
    {
      id: 4,
      name: "Creative Design",
      description: "Keywords for creative and design projects",
      keywords: ["creative", "design", "artistic", "visual", "modern", "elegant", "bold", "minimalist", "aesthetic", "stylish"],
      count: 10,
      lastUpdated: "5 days ago",
      category: "Design"
    },
    {
      id: 5,
      name: "E-commerce Sales",
      description: "Keywords for online sales and marketing",
      keywords: ["sale", "discount", "premium", "quality", "bestseller", "limited", "exclusive", "trending", "popular", "recommended"],
      count: 10,
      lastUpdated: "1 day ago",
      category: "Marketing"
    },
    {
      id: 6,
      name: "Travel & Adventure",
      description: "Keywords for travel and adventure content",
      keywords: ["adventure", "explore", "journey", "destination", "wanderlust", "discovery", "escape", "exotic", "breathtaking", "unforgettable"],
      count: 10,
      lastUpdated: "1 week ago",
      category: "Travel"
    }
  ];

  const filteredKeywordSets = keywordSets.filter(set => 
    set.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    set.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    set.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Business': return { bg: BRAND_COLORS.blue, text: 'white' };
      case 'Food': return { bg: BRAND_COLORS.coral, text: 'white' };
      case 'Health': return { bg: BRAND_COLORS.lime, text: BRAND_COLORS.darkBlue };
      case 'Design': return { bg: BRAND_COLORS.darkBlue, text: 'white' };
      case 'Marketing': return { bg: BRAND_COLORS.coral, text: 'white' };
      case 'Travel': return { bg: BRAND_COLORS.blue, text: 'white' };
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
              placeholder="Search keyword sets..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
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
        {/* Left Sidebar - Same as dashboard */}
        <aside className="w-64 bg-white fixed top-14 left-0 border-r flex flex-col h-[calc(100vh-3.5rem)]">
          <div className="p-4 flex-shrink-0">
            <Button 
              className="flex items-center space-x-3 w-full justify-center rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 font-semibold text-white border-0 h-12" 
              style={{ backgroundColor: BRAND_COLORS.blue }}
            >
              <Sparkles className="w-5 h-5" />
              <span>Create New</span>
            </Button>
          </div>

          <nav className="px-2 flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
            <div className="pb-6">
              {/* Core Navigation */}
              <div className="space-y-1">
                <Link href="/dashboard">
                  <Button variant="ghost" className="flex items-center space-x-3 w-full justify-start px-3 py-2 text-gray-700 rounded-r-full">
                    <Home className="w-5 h-5" />
                    <span>Home</span>
                  </Button>
                </Link>
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
                  <Image className="w-5 h-5" />
                  <span>Assets</span>
                </Button>
                <Button variant="ghost" className="flex items-center space-x-3 w-full justify-start px-3 py-2 rounded-r-full" style={{ color: BRAND_COLORS.blue, backgroundColor: `${BRAND_COLORS.blue}15` }}>
                  <Search className="w-5 h-5" />
                  <span className="font-medium">Keywords</span>
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

        {/* Main Content */}
        <main className="flex-1 p-6 ml-64">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Keyword Sets</h1>
              <p className="text-gray-600">Manage your collection of keyword sets for different projects and themes</p>
            </div>
            <Button 
              className="flex items-center space-x-2 text-white font-medium"
              style={{ backgroundColor: BRAND_COLORS.blue }}
            >
              <Plus className="w-4 h-4" />
              <span>New Keyword Set</span>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Total Sets</p>
                    <p className="text-2xl font-bold text-gray-900">{keywordSets.length}</p>
                  </div>
                  <Tag className="w-8 h-8 text-gray-400" />
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Total Keywords</p>
                    <p className="text-2xl font-bold text-gray-900">{keywordSets.reduce((acc, set) => acc + set.count, 0)}</p>
                  </div>
                  <Search className="w-8 h-8 text-gray-400" />
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Categories</p>
                    <p className="text-2xl font-bold text-gray-900">{new Set(keywordSets.map(set => set.category)).size}</p>
                  </div>
                  <Grid3X3 className="w-8 h-8 text-gray-400" />
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Recent Updates</p>
                    <p className="text-2xl font-bold text-gray-900">3</p>
                  </div>
                  <Calendar className="w-8 h-8 text-gray-400" />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Keyword Sets List - One per row */}
          <div className="space-y-4">
            {filteredKeywordSets.map((keywordSet) => {
              const categoryColors = getCategoryColor(keywordSet.category);
              return (
                <Card key={keywordSet.id} className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      {/* Left side - Main info */}
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="text-lg font-semibold text-gray-900">{keywordSet.name}</h3>
                          <span 
                            className="px-2 py-1 text-xs font-medium rounded-full"
                            style={{ backgroundColor: categoryColors.bg, color: categoryColors.text }}
                          >
                            {keywordSet.category}
                          </span>
                          <span className="text-sm text-gray-500">{keywordSet.count} keywords</span>
                          <span className="text-sm text-gray-500">•</span>
                          <span className="text-sm text-gray-500">Updated {keywordSet.lastUpdated}</span>
                        </div>
                        <p className="text-sm text-gray-600 mb-3">{keywordSet.description}</p>
                        
                        {/* Keywords Preview */}
                        <div className="flex flex-wrap gap-1">
                          {keywordSet.keywords.slice(0, 8).map((keyword, index) => (
                            <span 
                              key={index}
                              className="px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded-full"
                            >
                              {keyword}
                            </span>
                          ))}
                          {keywordSet.keywords.length > 8 && (
                            <span className="px-2 py-1 text-xs bg-gray-200 text-gray-600 rounded-full">
                              +{keywordSet.keywords.length - 8} more
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Right side - Actions */}
                      <div className="flex items-center space-x-2 ml-6">
                        <Button variant="outline" size="sm">
                          <Edit3 className="w-3 h-3 mr-1" />
                          Edit
                        </Button>
                        <Button variant="outline" size="sm">
                          <Copy className="w-3 h-3 mr-1" />
                          Copy
                        </Button>
                        <Button variant="ghost" size="icon" className="text-gray-400 hover:text-gray-600">
                          <MoreVertical className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Empty State */}
          {filteredKeywordSets.length === 0 && (
            <div className="text-center py-12">
              <Search className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No keyword sets found</h3>
              <p className="text-gray-500 mb-4">Try adjusting your search terms or create a new keyword set.</p>
              <Button style={{ backgroundColor: BRAND_COLORS.blue }}>
                <Plus className="w-4 h-4 mr-2" />
                Create New Keyword Set
              </Button>
            </div>
          )}
        </div>
        </main>
      </div>
    </div>
  );
}