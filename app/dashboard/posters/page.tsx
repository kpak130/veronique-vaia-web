"use client";

import { Search, Settings, Grid3X3, User, HelpCircle, ArrowLeft, Download, Heart, Share, Calendar, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

export default function PostersProject() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="flex items-center justify-between px-4 py-2 bg-white border-b">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <Link href="/dashboard" className="flex items-center space-x-2">
              <ArrowLeft className="w-5 h-5 text-gray-600" />
            </Link>
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
              placeholder="Search posters..."
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

      <div className="flex h-screen">
        {/* Left Panel - Input Controls */}
        <aside className="w-80 bg-white border-r p-6 overflow-y-auto">
          <div className="space-y-6">
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Poster Creator</h2>
              <p className="text-sm text-gray-600 mb-6">Design eye-catching posters for any occasion</p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Poster Title
                </label>
                <Input
                  type="text"
                  placeholder="Enter your poster title"
                  className="w-full"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Event Type
                </label>
                <select className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                  <option value="">Select event type</option>
                  <option value="concert">Concert</option>
                  <option value="conference">Conference</option>
                  <option value="party">Party</option>
                  <option value="sale">Sale/Promotion</option>
                  <option value="exhibition">Exhibition</option>
                  <option value="workshop">Workshop</option>
                  <option value="movie">Movie</option>
                  <option value="festival">Festival</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Date
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <Input
                      type="date"
                      className="w-full pl-10"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Time
                  </label>
                  <Input
                    type="time"
                    className="w-full"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Location
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input
                    type="text"
                    placeholder="Enter venue or location"
                    className="w-full pl-10"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Poster Size
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <Button variant="outline" className="justify-start">A4 Portrait</Button>
                  <Button variant="outline" className="justify-start">A4 Landscape</Button>
                  <Button variant="outline" className="justify-start">Square</Button>
                  <Button variant="outline" className="justify-start">Instagram</Button>
                  <Button variant="outline" className="justify-start">Facebook</Button>
                  <Button variant="outline" className="justify-start">Custom</Button>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Style Theme
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <Button variant="outline" className="justify-start">Modern</Button>
                  <Button variant="outline" className="justify-start">Vintage</Button>
                  <Button variant="outline" className="justify-start">Minimalist</Button>
                  <Button variant="outline" className="justify-start">Bold</Button>
                  <Button variant="outline" className="justify-start">Artistic</Button>
                  <Button variant="outline" className="justify-start">Corporate</Button>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Color Scheme
                </label>
                <div className="grid grid-cols-4 gap-2">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded border-2 border-gray-300 cursor-pointer"></div>
                  <div className="w-8 h-8 bg-gradient-to-r from-red-500 to-orange-500 rounded border-2 border-gray-300 cursor-pointer"></div>
                  <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-600 rounded border-2 border-gray-300 cursor-pointer"></div>
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded border-2 border-gray-300 cursor-pointer"></div>
                  <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded border-2 border-gray-300 cursor-pointer"></div>
                  <div className="w-8 h-8 bg-gradient-to-r from-gray-800 to-gray-600 rounded border-2 border-gray-300 cursor-pointer"></div>
                  <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-rose-500 rounded border-2 border-gray-300 cursor-pointer"></div>
                  <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-500 rounded border-2 border-gray-300 cursor-pointer"></div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Additional Details
                </label>
                <textarea
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  rows={3}
                  placeholder="Add any additional text, contact info, or special instructions..."
                />
              </div>

              <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                Generate Posters
              </Button>
            </div>
          </div>
        </aside>

        {/* Right Panel - Poster Grid */}
        <main className="flex-1 p-6 overflow-y-auto">
          <div className="mb-6">
            <h1 className="text-2xl font-semibold text-gray-900 mb-2">Generated Posters</h1>
            <p className="text-gray-600">Click on any poster to customize or download</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Sample Poster Cards */}
            {Array.from({ length: 9 }, (_, i) => (
              <Card key={i} className="group hover:shadow-lg transition-all duration-200 cursor-pointer">
                <CardContent className="p-4">
                  <div className="aspect-[3/4] bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 rounded-lg flex flex-col items-center justify-center mb-3 relative overflow-hidden text-white">
                    <div className="text-center p-4">
                      <h3 className="font-bold text-lg mb-2">
                        {i % 3 === 0 ? 'MUSIC FESTIVAL' : i % 3 === 1 ? 'ART EXHIBITION' : 'CONFERENCE 2024'}
                      </h3>
                      <p className="text-sm opacity-90 mb-3">
                        {i % 3 === 0 ? 'Summer Vibes 2024' : i % 3 === 1 ? 'Modern Art Gallery' : 'Tech Innovation Summit'}
                      </p>
                      <div className="text-xs opacity-80">
                        <p>📅 {i % 3 === 0 ? 'July 15-17' : i % 3 === 1 ? 'Aug 20-25' : 'Sep 10-12'}</p>
                        <p>📍 {i % 3 === 0 ? 'Central Park' : i % 3 === 1 ? 'Downtown Gallery' : 'Convention Center'}</p>
                      </div>
                    </div>
                    
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-200 flex items-center justify-center opacity-0 group-hover:opacity-100">
                      <div className="flex space-x-2">
                        <Button size="sm" variant="secondary" className="text-xs">
                          <Download className="w-3 h-3 mr-1" />
                          Download
                        </Button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Poster {i + 1}</span>
                    <div className="flex space-x-1">
                      <Button variant="ghost" size="icon" className="w-6 h-6">
                        <Heart className="w-3 h-3" />
                      </Button>
                      <Button variant="ghost" size="icon" className="w-6 h-6">
                        <Share className="w-3 h-3" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load More */}
          <div className="flex justify-center mt-8">
            <Button variant="outline">Load More Posters</Button>
          </div>
        </main>
      </div>
    </div>
  );
}