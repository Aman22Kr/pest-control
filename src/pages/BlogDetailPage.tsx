import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { BLOG_POSTS } from '../data/blogData';
import { PESTS } from '../data/pestsData';
import { AdBanner } from '../components/AdBanner';
import {
  User,
  Calendar,
  Clock,
  ArrowRight,
  CheckCircle2,
  MessageSquare,
  AlertCircle
} from 'lucide-react';

export const BlogDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const post = BLOG_POSTS.find((p) => p.id === id);

  const [commentName, setCommentName] = useState('');
  const [commentText, setCommentText] = useState('');
  const [comments, setComments] = useState<Array<{ name: string; text: string; date: string }>>([
    {
      name: 'David R.',
      text: 'Extremely helpful advice on the copper mesh. We had roof rats in our eaves last winter and standard steel wool rusted through in two months. Replaced with pure copper and solved!',
      date: '2 days ago'
    }
  ]);

  if (!post) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center">
        <AlertCircle className="w-12 h-12 text-slate-400 mx-auto mb-4" />
        <h2 className="text-2xl font-bold text-slate-900 mb-2">Article Not Found</h2>
        <p className="text-sm text-slate-600 mb-6">
          The requested prevention advisory could not be located.
        </p>
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-emerald-800 rounded-md"
        >
          View All Advisories
        </Link>
      </div>
    );
  }

  const relatedPest = PESTS.find((p) => p.id === post.relatedPestId);

  const handleAddComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!commentName.trim() || !commentText.trim()) return;
    setComments([
      {
        name: commentName,
        text: commentText,
        date: 'Just now'
      },
      ...comments
    ]);
    setCommentName('');
    setCommentText('');
  };

  return (
    <div className="w-full bg-slate-50 min-h-screen pb-16">
      {/* Header */}
      <section className="bg-slate-900 text-white py-12 border-b border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-xs text-slate-400 mb-4">
            <Link to="/" className="hover:text-white">Home</Link>
            <span aria-hidden="true">/</span>
            <Link to="/blog" className="hover:text-white">Pest Advisory</Link>
            <span aria-hidden="true">/</span>
            <span className="text-emerald-400">{post.category}</span>
          </div>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-display tracking-tight text-white leading-tight">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 mt-4 pt-4 border-t border-slate-800">
            <span className="flex items-center gap-1.5 text-slate-200">
              <User className="w-3.5 h-3.5 text-emerald-400" />
              <span>{post.author} ({post.authorRole})</span>
            </span>
            <span aria-hidden="true" className="text-slate-700">·</span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" />
              <span>{post.date}</span>
            </span>
            <span aria-hidden="true" className="text-slate-700">·</span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" />
              <span>{post.readTime}</span>
            </span>
          </div>
        </div>
      </section>

      {/* Main Body */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 space-y-10">
        {/* Article Content */}
        <article className="bg-white p-6 sm:p-10 rounded-lg border border-slate-200 shadow-sm space-y-6">
          <p className="text-base text-slate-700 font-medium leading-relaxed italic border-l-2 border-emerald-800 pl-4 py-1">
            {post.excerpt}
          </p>

          <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
            {post.content.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>

          {/* Key Takeaways Box */}
          <div className="bg-emerald-50/60 p-6 rounded-lg border border-emerald-200/80 space-y-3 mt-6">
            <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-950">
              Key Actionable Takeaways
            </h4>
            <ul className="space-y-2 text-xs text-slate-800">
              {post.keyTakeaways.map((takeaway, i) => (
                <li key={i} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                  <span>{takeaway}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Related Pest Widget */}
          {relatedPest && (
            <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 bg-slate-50 p-4 rounded-md">
              <div>
                <span className="text-[11px] font-semibold uppercase text-slate-500 block">Related Species Profile</span>
                <h5 className="text-sm font-bold text-slate-900">{relatedPest.name}</h5>
                <span className="text-xs text-slate-500 italic">{relatedPest.scientificName}</span>
              </div>
              <Link
                to={`/pests/${relatedPest.id}`}
                className="px-4 py-2 text-xs font-semibold text-white bg-emerald-800 hover:bg-emerald-700 rounded transition-colors whitespace-nowrap"
              >
                View Scientific Field Guide →
              </Link>
            </div>
          )}
        </article>

        {/* Reader Discussion / Comments */}
        <div className="bg-white p-6 sm:p-8 rounded-lg border border-slate-200 space-y-6">
          <div className="flex items-center gap-2 text-sm font-bold text-slate-900">
            <MessageSquare className="w-4 h-4 text-emerald-800" />
            <span>Homeowner Discussion & Questions ({comments.length})</span>
          </div>

          {/* Comment Form */}
          <form onSubmit={handleAddComment} className="space-y-3 text-xs">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <input
                type="text"
                placeholder="Your Name"
                required
                value={commentName}
                onChange={(e) => setCommentName(e.target.value)}
                className="px-3 py-2 bg-slate-50 border border-slate-200 rounded text-slate-800 focus:bg-white focus:outline-none"
              />
            </div>
            <textarea
              rows={3}
              placeholder="Ask an entomologist or share your prevention experience..."
              required
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
              className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded text-slate-800 focus:bg-white focus:outline-none"
            />
            <button
              type="submit"
              className="px-4 py-2 text-xs font-semibold text-white bg-emerald-800 hover:bg-emerald-700 rounded"
            >
              Post Comment
            </button>
          </form>

          {/* Comments List */}
          <div className="divide-y divide-slate-100 pt-2 space-y-4">
            {comments.map((c, i) => (
              <div key={i} className="pt-4 first:pt-0 space-y-1">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-slate-900">{c.name}</span>
                  <span className="text-slate-400">{c.date}</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">{c.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Compact Ad Banner */}
        <AdBanner />
      </div>
    </div>
  );
};
