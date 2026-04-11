import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, Calendar, User, Clock, ChevronRight } from 'lucide-react';
import { SEOHead } from '@/components/seo/SEOHead';
import { blogPosts, BlogPost } from '@/data/blogData';

export default function BlogPostPage() {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const foundPost = blogPosts.find(p => p.id === id);
    if (foundPost) {
      setPost(foundPost);
    }
  }, [id]);

  if (!post) {
    return (
      <main className="min-h-[60vh] flex flex-col items-center justify-center p-4 pt-32 pb-20">
        <h1 className="text-3xl font-bold mb-4">Post not found</h1>
        <Link to="/blog" className="text-brand-blue hover:underline">Return to Intelligence</Link>
      </main>
    );
  }

  // Generate basic Article schema for SEO
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "image": [post.image],
    "datePublished": new Date(post.date).toISOString(),
    "dateModified": post.lastUpdated ? new Date(post.lastUpdated).toISOString() : new Date(post.date).toISOString(),
    "author": [{
        "@type": "Person",
        "name": post.author,
        "jobTitle": post.authorRole
      }]
  };

  return (
    <main className="min-h-screen bg-white">
      <SEOHead
        title={`${post.title} | 912 Tech Protocol`}
        description={post.excerpt}
      />
      <script type="application/ld+json">
        {JSON.stringify(articleSchema)}
      </script>

      {/* Hero Section */}
      <article className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link to="/blog" className="inline-flex items-center text-sm font-bold text-brand-orange hover:text-brand-orange/80 transition-colors mb-8 uppercase tracking-wider">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Intelligence
            </Link>

            <div className="mb-8">
              <span className="inline-block px-3 py-1 bg-brand-blue/10 text-brand-blue font-bold text-sm rounded-full mb-6 uppercase tracking-wider">
                {post.category}
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-brand-dark leading-tight tracking-tighter mb-8">
                {post.title}
              </h1>

              <div className="flex flex-wrap items-center gap-6 text-slate-500 text-sm">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4 text-brand-orange" />
                  <span className="font-bold text-slate-700">{post.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-brand-blue" />
                  <time dateTime={new Date(post.date).toISOString()}>{post.date}</time>
                </div>
                {post.lastUpdated && (
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-slate-400" />
                    <span>Updated: <time dateTime={new Date(post.lastUpdated).toISOString()}>{post.lastUpdated}</time></span>
                  </div>
                )}
              </div>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="aspect-video w-full rounded-2xl overflow-hidden mb-16 shadow-xl"
            >
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </motion.div>

            <div className="grid md:grid-cols-12 gap-12">
              <div className="md:col-span-8">
                <div 
                  className="prose prose-lg prose-slate max-w-none prose-headings:font-heading prose-headings:font-bold prose-headings:text-brand-dark prose-a:text-brand-blue hover:prose-a:text-brand-blue/80 prose-img:rounded-xl"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />
              </div>

              <div className="md:col-span-4">
                <div className="sticky top-32 p-8 bg-slate-50 rounded-2xl border border-slate-100">
                  <h3 className="font-heading font-bold text-brand-dark text-lg mb-4 flex items-center gap-2">
                    <User className="w-5 h-5 text-brand-orange" />
                    About the Author
                  </h3>
                  <div className="mb-4">
                    <p className="font-bold text-brand-dark text-lg">{post.author}</p>
                    <p className="text-sm text-brand-blue font-semibold">{post.authorRole}</p>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {post.authorBio}
                  </p>
                  
                  <div className="border-t border-slate-200 pt-6">
                    <h4 className="font-bold text-brand-dark text-sm mb-4 uppercase tracking-wider">Related Services</h4>
                    <Link to="/contact" className="group flex items-center justify-between p-3 bg-white rounded-lg border border-slate-200 hover:border-brand-blue transition-colors">
                      <span className="text-sm font-semibold text-slate-700 group-hover:text-brand-blue transition-colors">Book a Consultation</span>
                      <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-brand-blue transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}
