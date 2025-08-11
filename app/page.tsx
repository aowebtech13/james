'use client';

import { useState, useEffect } from 'react';
import { 
  ChevronDown, 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  GraduationCap,
  Award,
  BookOpen,
  Users,
  MessageCircle,
  ExternalLink,
  Calendar,
  Star,
  Trophy,
  Globe
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function Home() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['hero', 'about', 'education', 'experience', 'publications', 'conferences', 'honours', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navigationItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'education', label: 'Education' },
    { id: 'training', label: 'Training' },
    { id: 'workshops', label: 'Workshops' },
    { id: 'experience', label: 'Experience' },
    { id: 'publications', label: 'Publications' },
    { id: 'conferences', label: 'Conferences' },
    { id: 'honours', label: 'Honours' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Header */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-xl font-bold text-gray-900">
              Bolaji Adeniyi
            </div>
            
            <div className="hidden md:flex space-x-8">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors duration-200 hover:text-blue-600 ${
                    activeSection === item.id ? 'text-blue-600' : 'text-gray-700'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <Button
              onClick={() => window.open('https://wa.link/y0u6zd', '_blank')}
              className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Learn More
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50/20 to-purple-50/20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-gray-900">
                Bolaji Comfort
                <span className="block text-blue-600">Adeniyi</span>
              </h1>
              <p className="text-xl md:text-2xl mb-4 text-gray-700">
                PhD Candidate & Lecturer
              </p>
              <p className="text-lg mb-8 text-gray-600 max-w-2xl">
                Specializing in Technology Entrepreneurship, Innovation management ,Digital Marketing, and E-commerce. 
                Passionate about bridging the gap between academic research and practical business innovation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button
                  onClick={() => scrollToSection('about')}
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg"
                >
                  Discover My Work
                  <ChevronDown className="w-5 h-5 ml-2" />
                </Button>
                <Button
                  onClick={() => window.open('https://wa.link/y0u6zd', '_blank')}
                  size="lg"
                  variant="outline"
                  className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Connect With Me
                </Button>
              </div>
            </div>
            
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-80 h-80 rounded-full bg-gradient-to-br from-blue-400 to-purple-600 p-2">
                  <img
                    src="/5807820705578994926_121.jpg"
                    alt="Bolaji Comfort Adeniyi"
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-white rounded-full p-4 shadow-lg">
                  <GraduationCap className="w-8 h-8 text-blue-600" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Me</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A dedicated academic and entrepreneur with a passion for technology entrepreneurship and innovation 
              management
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="/5807820705578994925_121.jpg"
                alt="Bolaji Adeniyi Professional"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                I am a PhD candidate in Technology Entrepreneurship at the prestigious University of Ibadan School of 
                Busines, currently serving as a Lecturer at Bamidele Olumilua University of Science and Technology. 
                My academic journey is driven by a passion for understanding how technology can transform 
                entrepreneurial landscapes and create sustainable business solutions.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                With expertise spanning digital marketing, e-commerce, and technology entrepreneurship and business and 
                marketing strategies 
                I bridge the gap between theoretical knowledge and practical application. My research 
                has been recognized internationally, with presentations at the World Congress on Education, 
2024 (WCE-2024) and The 18th International Conference on Information Society, 2025 (i-Society, 2025) 
held at The Cambridge University, United Kingdom .
              </p>

              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">₦8M+</div>
                  <div className="text-sm text-gray-600">Research Grants</div>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-lg">
                  <div className="text-2xl font-bold text-purple-600">10+</div>
                  <div className="text-sm text-gray-600">Publications</div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mt-6">
                {['Technology Entrepreneurship', 'Digital Marketing', 'E-commerce', 'Business Innovation', 'Academic Research'].map((skill) => (
                  <Badge key={skill} variant="secondary" className="bg-gray-100 text-gray-800">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Education</h2>
            <p className="text-lg text-gray-600">Academic qualifications and continuous learning journey</p>
          </div>

          <div className="space-y-8">
            <Card className="border-l-4 border-l-blue-500">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-xl text-gray-900">PhD in Technology Entrepreneurship</CardTitle>
                    <CardDescription className="text-lg font-medium text-gray-700">University of Ibadan School Of Business</CardDescription>
                  </div>
                  <Badge variant="outline" className="border-blue-500 text-blue-700">In Progress</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Advanced research in technology entrepreneurship, focusing on digital innovation, 
                  startup ecosystems, and the intersection of technology and business development.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-purple-500">
              <CardHeader>
                <CardTitle className="text-xl text-gray-900">M.Ed. Business Education</CardTitle>
                <CardDescription className="text-lg font-medium text-gray-700">Ekiti State University, Ado-Ekiti, Nigeria</CardDescription>
                <div className="text-sm text-gray-500 mt-1">2019</div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Master's degree in Business Education with focus on accounting technology and analytics, financial 
                  reporting and business pedagogy.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-green-500">
              <CardHeader>
                <CardTitle className="text-xl text-gray-900">B.Sc. (Ed) Accounting</CardTitle>
                <CardDescription className="text-lg font-medium text-gray-700">University of Ado-Ekiti, Ekiti State, Nigeria</CardDescription>
                <div className="text-sm text-gray-500 mt-1">2007</div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Bachelor's degree in Accounting Education, combining accounting principles with 
                  educational theory and practice.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Training & Certificates Section */}
      <section id="training" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Training & Certificates</h2>
            <p className="text-lg text-gray-600">Professional development and specialized certifications</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <Award className="w-8 h-8 text-blue-600 mt-1" />
                  
                </div>
                <CardTitle className="text-lg text-gray-900 mt-4">
                  Digital Marketing Certification
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-2"><strong>Supervised by:</strong> Coursera</p>
                <p className="text-sm text-gray-600 mb-3"><strong>Certificate Type:</strong> Non-degree Professional Certification</p>
                <p className="text-gray-600 mb-4">
                  Comprehensive certification in digital marketing strategies, social media marketing, 
                  and online advertising techniques.
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <Calendar className="w-4 h-4 mr-2" />
                  Certified Professional
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <Award className="w-8 h-8 text-purple-600 mt-1" />

                </div>
                <CardTitle className="text-lg text-gray-900 mt-4">
                  E-commerce Management
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-2"><strong>Supervised by:</strong> Facebook Blueprint (Meta Business)</p>
                <p className="text-sm text-gray-600 mb-3"><strong>Certificate Type:</strong> Non-degree Professional Certification</p>
                <p className="text-gray-600 mb-4">
                  Advanced training in e-commerce platforms, online business management, 
                  and digital payment systems.
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <Calendar className="w-4 h-4 mr-2" />
                  Professional Certificate
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <Award className="w-8 h-8 text-green-600 mt-1" />
                  
                </div>
                <CardTitle className="text-lg text-gray-900 mt-4">
                  Technology Entrepreneurship
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-2"><strong>Supervised by:</strong> University of Ibadan School of Business</p>
                <p className="text-sm text-gray-600 mb-3"><strong>Certificate Type:</strong> Academic Research Certificate</p>
                <p className="text-gray-600 mb-4">
                  Specialized training in technology startup development, innovation management, 
                  and entrepreneurial finance.
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <Calendar className="w-4 h-4 mr-2" />
                  Advanced Certificate
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <Award className="w-8 h-8 text-orange-600 mt-1" />
                 
                </div>
                <CardTitle className="text-lg text-gray-900 mt-4">
                  Research Methodology
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-2"><strong>Supervised by:</strong> University of Ibadan School of Business and Ekiti State 
                University</p>
                <p className="text-sm text-gray-600 mb-3"><strong>Certificate Type:</strong> Non-degree Professional Development</p>
                <p className="text-gray-600 mb-4">
                  Training in advanced research methods, data analysis, and academic writing 
                  for scholarly publications.
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <Calendar className="w-4 h-4 mr-2" />
                  Academic Certificate
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <Award className="w-8 h-8 text-red-600 mt-1" />
                  
                </div>
                <CardTitle className="text-lg text-gray-900 mt-4">
                  Business Analytics
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-2"><strong>Supervised by:</strong> IBM SPSS Statistics Certification Program,Institute of Management, Technology and Finance</p>
                <p className="text-sm text-gray-600 mb-3"><strong>Certificate Type:</strong> Non-degree Technical Certification</p>
                <p className="text-gray-600 mb-4">
                  Professional training in business intelligence, data visualization, 
                  and performance metrics analysis.
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <Calendar className="w-4 h-4 mr-2" />
                  Professional Certificate
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <Award className="w-8 h-8 text-indigo-600 mt-1" />
                 
                </div>
                <CardTitle className="text-lg text-gray-900 mt-4">
                  Project Management
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Certification in project management methodologies, team leadership, 
                  and strategic planning.
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <Calendar className="w-4 h-4 mr-2" />
                  Certified Professional
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Workshops Section */}
      <section id="workshops" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Workshops & Training Programs</h2>
            <p className="text-lg text-gray-600">Professional development through specialized workshops and training</p>
          </div>

          <div className="space-y-8">
            <Card className="border-l-4 border-l-blue-500 hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <Users className="w-8 h-8 text-blue-600" />
                    <div>
                      <CardTitle className="text-xl text-gray-900">Digital Transformation Workshop</CardTitle>
                      <CardDescription className="text-lg font-medium text-gray-700">Technology Integration in Business</CardDescription>
                    </div>
                  </div>
                  <Badge className="bg-blue-100 text-blue-800">Workshop Leader</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Led comprehensive workshops on digital transformation strategies for small and medium enterprises, 
                  focusing on technology adoption and business process optimization.
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <Calendar className="w-4 h-4 mr-2" />
                  Multiple Sessions 2023-2024
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-purple-500 hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <BookOpen className="w-8 h-8 text-purple-600" />
                    <div>
                      <CardTitle className="text-xl text-gray-900">Entrepreneurship Development Program</CardTitle>
                      <CardDescription className="text-lg font-medium text-gray-700">Startup Incubation and Mentoring</CardDescription>
                    </div>
                  </div>
                  <Badge variant="outline">Facilitator</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Conducted intensive workshops for aspiring entrepreneurs on business plan development, 
                  market analysis, and funding strategies.
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <Calendar className="w-4 h-4 mr-2" />
                  Quarterly Programs 2023-2024
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-green-500 hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <Globe className="w-8 h-8 text-green-600" />
                    <div>
                      <CardTitle className="text-xl text-gray-900">E-commerce Strategy Workshop</CardTitle>
                      <CardDescription className="text-lg font-medium text-gray-700">Online Business Development</CardDescription>
                    </div>
                  </div>
                  <Badge variant="outline">Expert Trainer</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Delivered specialized training on e-commerce platform development, digital payment integration, 
                  and online customer acquisition strategies.
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <Calendar className="w-4 h-4 mr-2" />
                  Monthly Sessions 2024
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-orange-500 hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <Star className="w-8 h-8 text-orange-600" />
                    <div>
                      <CardTitle className="text-xl text-gray-900">Research Methodology Training</CardTitle>
                      <CardDescription className="text-lg font-medium text-gray-700">Academic Research Excellence</CardDescription>
                    </div>
                  </div>
                  <Badge variant="outline">Senior Trainer</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Conducted advanced training sessions on qualitative and quantitative research methods, 
                  data collection techniques, and academic publication strategies.
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <Calendar className="w-4 h-4 mr-2" />
                  Bi-annual Programs 2023-2024
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-red-500 hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <Trophy className="w-8 h-8 text-red-600" />
                    <div>
                      <CardTitle className="text-xl text-gray-900">Digital Marketing Masterclass</CardTitle>
                      <CardDescription className="text-lg font-medium text-gray-700">Advanced Marketing Strategies</CardDescription>
                    </div>
                  </div>
                  <Badge variant="outline">Master Trainer</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Led masterclass sessions on advanced digital marketing techniques, SEO optimization, 
                  content marketing, and social media strategy development.
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <Calendar className="w-4 h-4 mr-2" />
                  Regular Sessions 2024
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-indigo-500 hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <GraduationCap className="w-8 h-8 text-indigo-600" />
                    <div>
                      <CardTitle className="text-lg text-gray-900">Academic Writing Workshop</CardTitle>
                      <CardDescription className="text-lg font-medium text-gray-700">Scholarly Publication Training</CardDescription>
                    </div>
                  </div>
                  <Badge variant="outline">Workshop Leader</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Facilitated workshops on academic writing excellence, journal publication processes, 
                  and research dissemination strategies.
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <Calendar className="w-4 h-4 mr-2" />
                  Ongoing Programs 2024
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      {/* Experience Section */}
      <section id="experience" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Professional Experience</h2>
            <p className="text-lg text-gray-600">Academic and professional roles shaping the future of technology education</p>
          </div>

          <div className="space-y-8">
            <Card className="border-l-4 border-l-blue-500">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-xl text-gray-900">Lecturer</CardTitle>
                    <CardDescription className="text-lg font-medium text-gray-700">
                      Bamidele Olumilua University of Science and Technology
                    </CardDescription>
                  </div>
                  <Badge className="bg-green-100 text-green-800">Current</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Teaching undergraduate and graduate courses in Technology Entrepreneurship</li>
                  <li>• Supervising student research projects and thesis work</li>
                  <li>• Developing curriculum for digital marketing and e-commerce programs</li>
                  <li>• Mentoring students in entrepreneurial ventures and startup development</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-purple-500">
              <CardHeader>
                <CardTitle className="text-xl text-gray-900">Research Fellow</CardTitle>
                <CardDescription className="text-lg font-medium text-gray-700">
                  Technology Entrepreneurship Research Center
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Leading research projects on digital transformation in SMEs</li>
                  <li>• Collaborating with international research teams</li>
                  <li>• Publishing findings in peer-reviewed journals</li>
                  <li>• Securing research grants for technology entrepreneurship studies</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-green-500">
              <CardHeader>
                <CardTitle className="text-xl text-gray-900">Digital Marketing Consultant</CardTitle>
                <CardDescription className="text-lg font-medium text-gray-700">
                  Various SMEs and Startups
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Developing digital marketing strategies for emerging businesses</li>
                  <li>• Implementing e-commerce solutions and online presence optimization</li>
                  <li>• Training entrepreneurs in digital marketing best practices</li>
                  <li>• Analyzing market trends and consumer behavior patterns</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Publications Section */}
      <section id="publications" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Publications & Research</h2>
            <p className="text-lg text-gray-600">Contributing to the academic discourse on technology entrepreneurship</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <BookOpen className="w-8 h-8 text-blue-600 mt-1" />
                  <Badge variant="outline">Journal Article</Badge>
                </div>
                <CardTitle className="text-lg text-gray-900 mt-4">
                  Digital Transformation in Nigerian SMEs: A Technology Entrepreneurship Perspective
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  An empirical study examining how small and medium enterprises in Nigeria are 
                  leveraging digital technologies for business growth and innovation.
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <Calendar className="w-4 h-4 mr-2" />
                  Published 2024
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <BookOpen className="w-8 h-8 text-blue-600 mt-1" />
                  <Badge variant="outline">Conference Paper</Badge>
                </div>
                <CardTitle className="text-lg text-gray-900 mt-4">
                  E-commerce Adoption Patterns Among African Entrepreneurs
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Research presented at the International Conference on Technology Entrepreneurship, 
                  exploring e-commerce trends across African markets.
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <Calendar className="w-4 h-4 mr-2" />
                  Presented 2023
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <BookOpen className="w-8 h-8 text-blue-600 mt-1" />
                  <Badge variant="outline">Book Chapter</Badge>
                </div>
                <CardTitle className="text-lg text-gray-900 mt-4">
                  Digital Marketing Strategies for Emerging Markets
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  A comprehensive guide to implementing effective digital marketing strategies 
                  in developing economies, with focus on technology adoption.
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <Calendar className="w-4 h-4 mr-2" />
                  Published 2023
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <BookOpen className="w-8 h-8 text-blue-600 mt-1" />
                  <Badge variant="outline">Research Report</Badge>
                </div>
                <CardTitle className="text-lg text-gray-900 mt-4">
                  Technology Entrepreneurship Ecosystem in West Africa
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Comprehensive analysis of the startup ecosystem, funding patterns, and 
                  technology adoption trends across West African countries.
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <Calendar className="w-4 h-4 mr-2" />
                  Published 2024
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button
              onClick={() => window.open('https://scholar.google.com/citations?hl=en&user=AUPlWxEAAAAJ&view', '_blank')}
              className="bg-gray-900 hover:bg-gray-800 text-white"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              View Full Publication List
            </Button>
          </div>
        </div>
      </section>

      {/* Conferences Section */}
      <section id="conferences" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Conferences & Speaking</h2>
            <p className="text-lg text-gray-600">Sharing knowledge and insights at international forums</p>
          </div>

          <div className="space-y-8">
            <Card className="border-l-4 border-l-blue-500 hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <Globe className="w-8 h-8 text-blue-600" />
                    <div>
                      <CardTitle className="text-xl text-gray-900">Cambridge University Technology Conference</CardTitle>
                      <CardDescription className="text-lg font-medium text-gray-700">Cambridge, United Kingdom</CardDescription>
                    </div>
                  </div>
                  <Badge className="bg-blue-100 text-blue-800">Keynote Speaker</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Delivered a keynote presentation on "Technology Entrepreneurship in Emerging Markets: 
                  Challenges and Opportunities" to an international audience of researchers and practitioners.
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <Calendar className="w-4 h-4 mr-2" />
                  September 2024
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-purple-500 hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <Users className="w-8 h-8 text-purple-600" />
                    <div>
                      <CardTitle className="text-xl text-gray-900">African Entrepreneurship Summit</CardTitle>
                      <CardDescription className="text-lg font-medium text-gray-700">Lagos, Nigeria</CardDescription>
                    </div>
                  </div>
                  <Badge variant="outline">Panel Discussion</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Participated in a panel discussion on "Digital Transformation and SME Growth in Africa" 
                  alongside leading entrepreneurs and policy makers.
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <Calendar className="w-4 h-4 mr-2" />
                  March 2024
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-green-500 hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <BookOpen className="w-8 h-8 text-green-600" />
                    <div>
                      <CardTitle className="text-xl text-gray-900">International E-commerce Research Conference</CardTitle>
                      <CardDescription className="text-lg font-medium text-gray-700">Virtual Conference</CardDescription>
                    </div>
                  </div>
                  <Badge variant="outline">Research Presentation</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Presented research findings on "Consumer Behavior in Digital Marketplaces: 
                  A Cross-Cultural Analysis" to an international academic audience.
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <Calendar className="w-4 h-4 mr-2" />
                  November 2023
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Honours & Distinctions Section */}
      <section id="honours" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Honours & Distinctions</h2>
            <p className="text-lg text-gray-600">Recognition for academic excellence and professional contributions</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <Trophy className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <CardTitle className="text-lg text-gray-900">Research Excellence Award</CardTitle>
              </CardHeader>
              <CardContent>
              <p className="text-gray-600">
                  Recognized for outstanding contribution to technology entrepreneurship research
                </p>
                <p className="text-gray-600">
                Certificate of Professional Development for Presentation and Contribution to Knowledge Domain at The 
                World Congress on Education, 2024 (WCE-2024)
                </p>
                <div className="text-sm text-gray-500 mt-2">University of Ibadan, 2024</div>
              </CardContent>
            </Card>

            

            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <Award className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <CardTitle className="text-lg text-gray-900">Research Grant Recipient</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Awarded over ₦8 million in research grants for technology entrepreneurship studies
                </p>
                <div className="text-sm text-gray-500 mt-2">Multiple Institutions, 2023-2024</div>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <CardTitle className="text-lg text-gray-900">Professional Membership</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                Membership of The Institute of Business Diplomacy and Financial Management, Nigeria. (IBDFM)
                </p>
                <p className="text-gray-600">
                Membership of the International Association of Research Scholars and Administration (IARSA)
                </p>
                <p className="text-gray-600">
                Membership of the Global Research Academy
                </p>
                <div className="text-sm text-gray-500 mt-2">Since 2023</div>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <BookOpen className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <CardTitle className="text-lg text-gray-900">Editorial Board Member</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                Member of the Editorial Board, International Journal of Innovative Business Strategies (IJIBS).
                </p>
                <div className="text-sm text-gray-500 mt-2">Since 2024</div>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <GraduationCap className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <CardTitle className="text-lg text-gray-900">Academic Excellence</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Graduated with distinction in all academic programs
                </p>
                <div className="text-sm text-gray-500 mt-2">Consistent Achievement</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Let's collaborate on research, speaking opportunities, or discuss technology entrepreneurship
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <div className="bg-blue-600 p-3 rounded-full">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Email</h3>
                  <a href="mailto:bolajifemiadeniyi@gmail.com" className="text-gray-300 hover:text-blue-400 transition-colors">
                    bolajifemiadeniyi@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-blue-600 p-3 rounded-full">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Phone</h3>
                  <a href="tel:+2348065097887" className="text-gray-300 hover:text-blue-400 transition-colors">
                    +234 806 509 7887
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-blue-600 p-3 rounded-full">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Location</h3>
                  <p className="text-gray-300">Ekiti State, Nigeria</p>
                </div>
              </div>

              <div className="pt-8">
                <h3 className="text-lg font-semibold mb-4">Connect With Me</h3>
                <div className="flex space-x-4">
                  <Button
                    onClick={() => window.open('https://www.linkedin.com/in/bolaji-adeniyi-a9698a267?utm', '_blank')}
                    className="bg-blue-700 hover:bg-blue-800 text-white shadow-lg"
                  >
                    <Linkedin className="w-5 h-5 mr-2" />
                    LinkedIn
                  </Button>
                  <Button
                    onClick={() => window.open('https://scholar.google.com/citations?hl=en&user=AUPlWxEAAAAJ&view', '_blank')}
                    className="bg-red-600 hover:bg-red-700 text-white shadow-lg"
                  >
                    <BookOpen className="w-5 h-5 mr-2" />
                    Google Scholar
                  </Button>
                  <Button
                    onClick={() => window.open('https://wa.link/y0u6zd', '_blank')}
                    className="bg-green-600 hover:bg-green-700 text-white shadow-lg"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    WhatsApp
                  </Button>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
              <h3 className="text-xl font-semibold mb-6">Send a Message</h3>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    name='fullName'
                    value='fullName'

                    id="name"
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                  <input

                    type="email"
                    name='email'
                    value='email'
                    id="email"
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
                  <input
                    type="text"
                    name='subject'
                    value='Subject'
                    id="subject"
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="What would you like to discuss?"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    id="message"
                    name='message'
                    value='Message'
                    rows={4}
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your message here..."
                  ></textarea>
                </div>
                <Button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 shadow-lg"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-400">
              © 2024 Bolaji Comfort Adeniyi. All rights reserved.
            </p>
            <p className="text-gray-500 mt-2">
              Technology Entrepreneurship • Digital Innovation • Academic Excellence
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}