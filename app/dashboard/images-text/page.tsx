"use client";

import { Search, Settings, Grid3X3, User, HelpCircle, ArrowLeft, Download, Heart, Share, FileText, ImageIcon, Upload, Loader2, X, Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { useState } from "react";
import { BRAND_COLORS } from "@/lib/theme";

export default function ImagesTextProject() {
  const [activeTab, setActiveTab] = useState<'images' | 'text'>('images');
  const [isGenerating, setIsGenerating] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [allImages, setAllImages] = useState<any[]>([]);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [allTexts, setAllTexts] = useState<any[]>([]);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [currentGenerationImages, setCurrentGenerationImages] = useState<any[]>([]);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [currentGenerationTexts, setCurrentGenerationTexts] = useState<any[]>([]);
  const [showingImageIndex, setShowingImageIndex] = useState(0);
  const [showingTextIndex, setShowingTextIndex] = useState(0);
  const [showLoadingCards, setShowLoadingCards] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [selectedImage, setSelectedImage] = useState<any>(null);
  const [showImagePanel, setShowImagePanel] = useState(false);

  const newImages = [
    { url: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&h=800&fit=crop", title: "Business Meeting", size: "1200x800px", prompt: "Professional business meeting with diverse team members discussing strategy in modern conference room" },
    { url: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=800&fit=crop", title: "Team Collaboration", size: "1080x1080px", prompt: "Creative team collaborating on innovative project with laptops and brainstorming materials" },
    { url: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=600&fit=crop", title: "Office Space", size: "800x600px", prompt: "Modern minimalist office space with natural lighting and ergonomic furniture design" },
    { url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=800&fit=crop", title: "Data Analytics", size: "1200x800px", prompt: "Data visualization dashboard showing business analytics and growth metrics on multiple screens" },
    { url: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=800&fit=crop", title: "Creative Workshop", size: "1080x1080px", prompt: "Creative workshop session with designers working on user experience and product development" },
    { url: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop", title: "Remote Work", size: "800x600px", prompt: "Remote worker in comfortable home office setup with technology and productivity tools" },
    { url: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=800&fit=crop", title: "Strategy Session", size: "1200x800px", prompt: "Executive strategy planning session with whiteboards and business planning materials" },
    { url: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=800&fit=crop", title: "Team Success", size: "1080x1080px", prompt: "Successful team celebrating project completion with positive energy and achievement" },
    { url: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=800&h=600&fit=crop", title: "Modern Workspace", size: "800x600px", prompt: "Contemporary workspace design with open layout and collaborative work areas" },
    { url: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=800&fit=crop", title: "Team Brainstorming", size: "1200x800px", prompt: "Dynamic brainstorming session with sticky notes and creative ideation process" }
  ];

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleImageClick = (image: any) => {
    setSelectedImage(image);
    setShowImagePanel(true);
  };

  const handleClosePanel = () => {
    setShowImagePanel(false);
    setSelectedImage(null);
  };

  const newTexts = [
    { type: 'Marketing Copy', category: 'Promotional content', title: 'Transform Your Business Today!', content: 'Discover innovative solutions that drive growth and success. Our cutting-edge approach combines industry expertise with modern technology to deliver exceptional results for your business.', words: 42 },
    { type: 'Blog Post Excerpt', category: 'Blog content', title: 'The Future of Digital Innovation', content: 'In today\'s rapidly evolving digital landscape, staying ahead means embracing change and leveraging technology to create meaningful connections with your audience. Here\'s how to get started...', words: 38 },
    { type: 'Product Description', category: 'Product content', title: 'Premium Quality Product', content: 'Crafted with precision and attention to detail, this product offers unmatched quality and performance. Perfect for professionals who demand excellence in every aspect of their work.', words: 36 },
    { type: 'Marketing Copy', category: 'Promotional content', title: 'Elevate Your Brand Experience', content: 'Create lasting impressions with our comprehensive branding solutions. From visual identity to strategic messaging, we help businesses stand out in competitive markets.', words: 35 },
    { type: 'Blog Post Excerpt', category: 'Blog content', title: 'Mastering Digital Transformation', content: 'Digital transformation isn\'t just about technology—it\'s about reimagining how your business operates and delivers value to customers in an increasingly connected world.', words: 41 },
    { type: 'Product Description', category: 'Product content', title: 'Next-Generation Solution', content: 'Experience the future of productivity with our innovative platform. Designed for modern teams, it seamlessly integrates with your existing workflow while boosting efficiency.', words: 39 },
    { type: 'Marketing Copy', category: 'Promotional content', title: 'Unlock Your Potential', content: 'Take your skills to the next level with our comprehensive training programs. Learn from industry experts and gain practical knowledge that drives real results.', words: 33 },
    { type: 'Blog Post Excerpt', category: 'Blog content', title: 'Building Resilient Teams', content: 'Strong teams are built on trust, communication, and shared goals. Discover proven strategies for creating collaborative environments that thrive under pressure.', words: 37 },
    { type: 'Product Description', category: 'Product content', title: 'Professional Grade Tools', content: 'Built for professionals who demand reliability and performance. Our tools undergo rigorous testing to ensure they meet the highest standards of quality and durability.', words: 40 },
    { type: 'Marketing Copy', category: 'Promotional content', title: 'Start Your Journey Today', content: 'Every great achievement begins with a single step. Join thousands of satisfied customers who have transformed their businesses with our proven solutions.', words: 34 }
  ];

  const handleGenerateContent = () => {
    setIsGenerating(true);
    setShowLoadingCards(true);
    setShowingImageIndex(0);
    setShowingTextIndex(0);
    
    // Initialize empty arrays for the current generation
    setCurrentGenerationImages(new Array(10).fill(null));
    setCurrentGenerationTexts(new Array(10).fill(null));
    
    // After 10 seconds, start showing images/texts one by one
    setTimeout(() => {
      setIsGenerating(false);
      
      // Show images one by one with 1 second intervals
      newImages.forEach((image, index) => {
        setTimeout(() => {
          setCurrentGenerationImages(prev => {
            const newArray = [...prev];
            newArray[index] = image;
            return newArray;
          });
          setShowingImageIndex(index + 1);
          
          // When the last image is loaded, add all to permanent collection at the beginning
          if (index === newImages.length - 1) {
            setTimeout(() => {
              setAllImages(prev => [...newImages, ...prev]);
              setShowLoadingCards(false);
              setCurrentGenerationImages([]);
            }, 1000);
          }
        }, index * 1000);
      });

      // Show texts one by one with 1 second intervals
      newTexts.forEach((text, index) => {
        setTimeout(() => {
          setCurrentGenerationTexts(prev => {
            const newArray = [...prev];
            newArray[index] = text;
            return newArray;
          });
          setShowingTextIndex(index + 1);
          
          // When the last text is loaded, add all to permanent collection at the beginning
          if (index === newTexts.length - 1) {
            setTimeout(() => {
              setAllTexts(prev => [...newTexts, ...prev]);
              setCurrentGenerationTexts([]);
            }, 1000);
          }
        }, index * 1000);
      });
    }, 10000);
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: BRAND_COLORS.lightGray }}>
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 py-2 bg-white border-b">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <Link href="/dashboard" className="flex items-center space-x-2">
              <ArrowLeft className="w-5 h-5 text-gray-600" />
            </Link>
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
              placeholder="Search marketing content..."
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

      <div className="flex h-screen pt-14">
        {/* Left Panel - Input Controls */}
        <aside className="w-80 bg-white border-r flex flex-col relative">
          <div className="flex-1 p-6 overflow-y-auto pb-24">
            <div className="space-y-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Title
                  </label>
                  <Input
                    type="text"
                    placeholder="Enter your marketing title"
                    className="w-full"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subtitle
                  </label>
                  <Input
                    type="text"
                    placeholder="Enter your subtitle"
                    className="w-full"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Description
                  </label>
                  <textarea
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    rows={4}
                    placeholder="Describe your marketing content in detail..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Upload Files
                  </label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-gray-400 transition-colors cursor-pointer">
                    <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                    <p className="text-sm text-gray-600 mb-1">Drag and drop files here</p>
                    <p className="text-xs text-gray-500">or click to browse</p>
                    <p className="text-xs text-gray-400 mt-2">PNG, JPG, PDF up to 10MB</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Fixed bottom button */}
          <div className="absolute bottom-0 left-0 right-0 px-6 pt-6 pb-6 bg-white border-t">
            <Button 
              className="w-full h-14 text-lg font-medium" 
              style={{ backgroundColor: BRAND_COLORS.lime, color: BRAND_COLORS.darkBlue }}
              onClick={handleGenerateContent}
              disabled={isGenerating}
            >
              {isGenerating ? (
                <>
                  <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                  Generating...
                </>
              ) : (
                'Generate Content'
              )}
            </Button>
          </div>
        </aside>

        {/* Right Panel - Content Display with Tabs */}
        <main className="flex-1 p-6 overflow-y-auto">
          <div className="mb-6">
            <div className="flex items-center justify-between mb-4">
              <h1 className="text-2xl font-semibold text-gray-900">Generated Content</h1>
              <div className="flex space-x-1 bg-gray-100 rounded-lg p-1">
                <button
                  onClick={() => setActiveTab('images')}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-all`}
                  style={{
                    backgroundColor: activeTab === 'images' ? 'white' : 'transparent',
                    color: activeTab === 'images' ? BRAND_COLORS.darkBlue : '#6B7280'
                  }}
                >
                  <ImageIcon className="w-4 h-4 inline mr-2" />
                  Images
                </button>
                <button
                  onClick={() => setActiveTab('text')}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-all`}
                  style={{
                    backgroundColor: activeTab === 'text' ? 'white' : 'transparent',
                    color: activeTab === 'text' ? BRAND_COLORS.darkBlue : '#6B7280'
                  }}
                >
                  <FileText className="w-4 h-4 inline mr-2" />
                  Text
                </button>
              </div>
            </div>
            <p className="text-gray-600">
              {activeTab === 'images' 
                ? 'Click on any image to customize or download' 
                : 'Click on any text to edit or copy'}
            </p>
          </div>

          {/* Images Tab Content */}
          {activeTab === 'images' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Current generation loading/Generated cards - shown first */}
              {showLoadingCards && Array.from({ length: 10 }, (_, i) => {
                const image = currentGenerationImages[i];
                const isLoaded = !!image;
                
                return (
                  <Card 
                    key={`generating-${i}`} 
                    className={!isLoaded ? "animate-pulse" : "hover:shadow-lg transition-all duration-200 cursor-pointer"}
                    onClick={() => isLoaded && handleImageClick(image)}
                  >
                    <CardContent className="p-4">
                      <div className="aspect-square rounded-lg mb-3 relative overflow-hidden bg-gray-100">
                        {isLoaded ? (
                          <img 
                            src={image.url}
                            alt={image.title}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="flex items-center justify-center h-full">
                            <Loader2 className="w-8 h-8 animate-spin" style={{ color: BRAND_COLORS.blue }} />
                          </div>
                        )}
                      </div>
                      
                      <div className="flex items-center justify-between">
                        {isLoaded ? (
                          <>
                            <div>
                              <p className="text-sm font-medium text-gray-900">{image.title}</p>
                              <p className="text-xs text-gray-500">{image.size}</p>
                            </div>
                            <div className="flex space-x-1">
                              <Button variant="ghost" size="icon" className="w-6 h-6">
                                <Heart className="w-3 h-3" />
                              </Button>
                              <Button variant="ghost" size="icon" className="w-6 h-6">
                                <Share className="w-3 h-3" />
                              </Button>
                            </div>
                          </>
                        ) : (
                          <>
                            <div>
                              <div className="h-4 bg-gray-200 rounded w-24 mb-1"></div>
                              <div className="h-3 bg-gray-100 rounded w-16"></div>
                            </div>
                            <div className="flex space-x-1">
                              <div className="w-6 h-6 bg-gray-100 rounded"></div>
                              <div className="w-6 h-6 bg-gray-100 rounded"></div>
                            </div>
                          </>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}

              {/* Existing images from previous generations - shown after loading cards */}
              {allImages.map((image, i) => (
                <Card 
                  key={`existing-${i}`} 
                  className="hover:shadow-lg transition-all duration-200 cursor-pointer"
                  onClick={() => handleImageClick(image)}
                >
                  <CardContent className="p-4">
                    <div className="aspect-square rounded-lg mb-3 relative overflow-hidden bg-gray-100">
                      <img 
                        src={image.url}
                        alt={image.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-900">{image.title}</p>
                        <p className="text-xs text-gray-500">{image.size}</p>
                      </div>
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
          )}

          {/* Text Tab Content */}
          {activeTab === 'text' && (
            <div className="space-y-4">
              {/* Current generation loading/Generated cards for text - shown first */}
              {showLoadingCards && Array.from({ length: 10 }, (_, i) => {
                const text = currentGenerationTexts[i];
                const isLoaded = !!text;
                
                return (
                  <Card key={`text-${i}`} className={!isLoaded ? "animate-pulse" : "group hover:shadow-lg transition-all duration-200 cursor-pointer"}>
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: isLoaded ? `${BRAND_COLORS.blue}20` : '#E5E7EB' }}>
                            {isLoaded ? (
                              <FileText className="w-4 h-4" style={{ color: BRAND_COLORS.blue }} />
                            ) : (
                              <div className="w-4 h-4 bg-gray-300 rounded"></div>
                            )}
                          </div>
                          <div>
                            {isLoaded ? (
                              <>
                                <h3 className="font-semibold text-gray-900">{text.type}</h3>
                                <p className="text-sm text-gray-500">{text.category}</p>
                              </>
                            ) : (
                              <>
                                <div className="h-4 bg-gray-200 rounded w-32 mb-2"></div>
                                <div className="h-3 bg-gray-100 rounded w-24"></div>
                              </>
                            )}
                          </div>
                        </div>
                        <div className="flex space-x-1">
                          {isLoaded ? (
                            <>
                              <Button variant="ghost" size="icon" className="w-6 h-6">
                                <Heart className="w-3 h-3" />
                              </Button>
                              <Button variant="ghost" size="icon" className="w-6 h-6">
                                <Share className="w-3 h-3" />
                              </Button>
                            </>
                          ) : (
                            <>
                              <div className="w-6 h-6 bg-gray-100 rounded"></div>
                              <div className="w-6 h-6 bg-gray-100 rounded"></div>
                            </>
                          )}
                        </div>
                      </div>
                      
                      {isLoaded ? (
                        <div className="prose prose-sm max-w-none text-gray-700 mb-4">
                          <p className="mb-3">
                            {text.type === 'Marketing Copy' ? '🚀' : text.type === 'Blog Post Excerpt' ? '📝' : '⭐'} <strong>{text.title}</strong>
                          </p>
                          <p className="text-sm leading-relaxed">
                            {text.content}
                          </p>
                        </div>
                      ) : (
                        <div className="space-y-2 mb-4">
                          <div className="h-4 bg-gray-100 rounded w-full"></div>
                          <div className="h-4 bg-gray-100 rounded w-5/6"></div>
                          <div className="h-4 bg-gray-100 rounded w-4/6"></div>
                          <div className="flex items-center justify-center mt-4">
                            <Loader2 className="w-6 h-6 animate-spin" style={{ color: BRAND_COLORS.blue }} />
                          </div>
                        </div>
                      )}
                      
                      <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                        {isLoaded ? (
                          <>
                            <span className="text-sm text-gray-500">{text.words} words</span>
                            <Button size="sm" variant="outline" className="text-xs">
                              Copy Text
                            </Button>
                          </>
                        ) : (
                          <>
                            <div className="h-3 bg-gray-100 rounded w-16"></div>
                            <div className="h-6 bg-gray-100 rounded w-20"></div>
                          </>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}

              {/* Existing texts from previous generations - shown after loading cards */}
              {allTexts.map((text, i) => (
                <Card key={`existing-text-${i}`} className="group hover:shadow-lg transition-all duration-200 cursor-pointer">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${BRAND_COLORS.blue}20` }}>
                          <FileText className="w-4 h-4" style={{ color: BRAND_COLORS.blue }} />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">{text.type}</h3>
                          <p className="text-sm text-gray-500">{text.category}</p>
                        </div>
                      </div>
                      <div className="flex space-x-1">
                        <Button variant="ghost" size="icon" className="w-6 h-6">
                          <Heart className="w-3 h-3" />
                        </Button>
                        <Button variant="ghost" size="icon" className="w-6 h-6">
                          <Share className="w-3 h-3" />
                        </Button>
                      </div>
                    </div>
                    
                    <div className="prose prose-sm max-w-none text-gray-700 mb-4">
                      <p className="mb-3">
                        {text.type === 'Marketing Copy' ? '🚀' : text.type === 'Blog Post Excerpt' ? '📝' : '⭐'} <strong>{text.title}</strong>
                      </p>
                      <p className="text-sm leading-relaxed">
                        {text.content}
                      </p>
                    </div>
                    
                    <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                      <span className="text-sm text-gray-500">{text.words} words</span>
                      <Button size="sm" variant="outline" className="text-xs">
                        Copy Text
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {/* Load More */}
          <div className="flex justify-center mt-8">
            <Button variant="outline">
              Load More {activeTab === 'images' ? 'Images' : 'Text'}
            </Button>
          </div>
        </main>

        {/* Image Detail Sliding Panel */}
        <>
          {/* Backdrop */}
          <div 
            className={`fixed inset-0 bg-black/60 z-60 transition-opacity duration-300 ${showImagePanel ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
            onClick={handleClosePanel}
          />
          
          {/* Sliding Panel */}
          <div className={`fixed top-0 right-0 h-full w-[500px] bg-white shadow-xl z-70 transform transition-all duration-300 ease-in-out ${showImagePanel ? 'translate-x-0' : 'translate-x-full'}`}>
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="flex items-center justify-between p-4 border-b">
                  <h3 className="text-lg font-semibold text-gray-900">Image Details</h3>
                  <Button 
                    variant="ghost" 
                    size="icon"
                    onClick={handleClosePanel}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <X className="w-5 h-5" />
                  </Button>
                </div>

                {/* Content */}
                <div className="flex-1 overflow-y-auto p-4">
                  {selectedImage && (
                    <div className="space-y-4">
                      {/* Image */}
                      <div className="aspect-square rounded-lg overflow-hidden bg-gray-100">
                        <img 
                          src={selectedImage.url}
                          alt={selectedImage.title}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Image Info */}
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">{selectedImage.title}</h4>
                        <p className="text-sm text-gray-500">{selectedImage.size}</p>
                      </div>

                      {/* Prompt */}
                      <div>
                        <h5 className="font-medium text-gray-900 mb-2">Generation Prompt</h5>
                        <div className="bg-gray-50 rounded-lg p-3">
                          <p className="text-sm text-gray-700 leading-relaxed">
                            {selectedImage.prompt}
                          </p>
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="space-y-2">
                        <Button 
                          className="w-full" 
                          style={{ backgroundColor: BRAND_COLORS.blue }}
                        >
                          <Download className="w-4 h-4 mr-2" />
                          Download Image
                        </Button>
                        
                        <Button 
                          variant="outline" 
                          className="w-full"
                        >
                          <Copy className="w-4 h-4 mr-2" />
                          Copy Prompt
                        </Button>
                        
                        <Button 
                          variant="outline" 
                          className="w-full"
                        >
                          <Share className="w-4 h-4 mr-2" />
                          Share Image
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
        </>
      </div>
    </div>
  );
}