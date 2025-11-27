import React, { useState } from 'react'
import { FaLinkedin, FaExternalLinkAlt, FaHeart, FaComment, FaShare } from 'react-icons/fa'
import { linkedInPosts } from '../data/linkedinPostsData'

// Post Card Component
const PostCard = ({ post, index, hoveredPost, setHoveredPost, getColorClasses }) => {
  const [imageError, setImageError] = useState(false)
  const colors = getColorClasses(post.color)
  const isHovered = hoveredPost === index

  return (
    <a
      href={post.link}
      target="_blank"
      rel="noopener noreferrer"
      className="card-interactive group relative overflow-hidden flex flex-col"
      onMouseEnter={() => setHoveredPost(index)}
      onMouseLeave={() => setHoveredPost(null)}
      style={{ animationDelay: `${index * 0.15}s` }}
    >
      {/* Gradient overlay */}
      <div className={`absolute inset-0 bg-gradient-to-br ${
        post.color === 'accent-primary' 
        ? 'from-accent-primary/10 via-transparent to-accent-secondary/10' 
        : post.color === 'accent-secondary'
        ? 'from-accent-secondary/10 via-transparent to-accent-tertiary/10'
        : 'from-accent-secondary/10 via-transparent to-accent-primary/10'
      } opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0`}></div>

      <div className="relative z-10 flex flex-col flex-1">
        {/* LinkedIn Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className={`p-2.5 border-2 rounded-lg transition-all duration-500 group-hover:scale-110 ${
              post.color === 'accent-primary'
                ? 'bg-accent-primary/20 border-accent-primary/40 group-hover:bg-accent-primary/30 group-hover:border-accent-primary'
                : post.color === 'accent-secondary'
                ? 'bg-accent-secondary/20 border-accent-secondary/40 group-hover:bg-accent-secondary/30 group-hover:border-accent-secondary'
                : 'bg-accent-tertiary/20 border-accent-tertiary/40 group-hover:bg-accent-tertiary/30 group-hover:border-accent-tertiary'
            }`}>
              <FaLinkedin className={`${colors.text} text-lg`} />
            </div>
            <div>
              <p className="text-sm font-semibold text-neutral-text">Kanishk Ashra</p>
              <p className="text-xs text-neutral-text-disabled">{post.date}</p>
            </div>
          </div>
        </div>

        {/* Post Image */}
        <div className="relative w-full aspect-video mb-4 rounded-lg overflow-hidden bg-dark-surface-1dp">
          {!imageError ? (
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-accent-primary/10 to-accent-secondary/10">
              <div className="text-center space-y-2">
                <FaLinkedin className={`${colors.text} text-4xl mx-auto opacity-50`} />
                <p className="text-xs text-neutral-text-disabled">Add image to public/images/</p>
              </div>
            </div>
          )}
        </div>

        {/* Post Content */}
        <div className="flex-1 flex flex-col">
          <h3 className={`text-lg font-bold mb-2 ${colors.text} group-hover:scale-105 transition-transform duration-300 line-clamp-2`}>
            {post.title}
          </h3>
          <p className="text-neutral-text-medium text-sm leading-relaxed mb-4 line-clamp-3 group-hover:text-neutral-text transition-colors duration-300">
            {post.content}
          </p>

          {/* Engagement Stats */}
          <div className="flex items-center gap-4 mt-auto pt-4 border-t border-dark-border/50">
            <div className="flex items-center gap-1.5 text-neutral-text-disabled text-xs group-hover:text-neutral-text-medium transition-colors">
              <FaHeart className="text-accent-primary" />
              <span>{post.likes}</span>
            </div>
            <div className="flex items-center gap-1.5 text-neutral-text-disabled text-xs group-hover:text-neutral-text-medium transition-colors">
              <FaComment className="text-accent-secondary" />
              <span>{post.comments}</span>
            </div>
            <div className="flex items-center gap-1.5 text-neutral-text-disabled text-xs group-hover:text-neutral-text-medium transition-colors">
              <FaShare className="text-accent-tertiary" />
              <span>{post.shares}</span>
            </div>
          </div>

          {/* View Post Link */}
          <div className="mt-4 pt-4 border-t border-dark-border/50">
            <div className={`flex items-center justify-between ${colors.text} text-sm font-semibold group-hover:translate-x-1 transition-transform duration-300`}>
              <span>View on LinkedIn</span>
              <FaExternalLinkAlt className="text-xs" />
            </div>
          </div>
        </div>
      </div>
    </a>
  )
}

const LinkedInPosts = () => {
  const [hoveredPost, setHoveredPost] = useState(null)

  // LinkedIn posts data is imported from ../data/linkedinPostsData.js
  // Edit that file to update your posts!

  const getColorClasses = (color) => {
    const colors = {
      'accent-primary': {
        text: 'text-accent-primary',
        border: 'border-accent-primary',
        bg: 'bg-accent-primary',
        hover: 'hover:border-accent-primary',
      },
      'accent-secondary': {
        text: 'text-accent-secondary',
        border: 'border-accent-secondary',
        bg: 'bg-accent-secondary',
        hover: 'hover:border-accent-secondary',
      },
      'accent-tertiary': {
        text: 'text-accent-tertiary',
        border: 'border-accent-tertiary',
        bg: 'bg-accent-tertiary',
        hover: 'hover:border-accent-tertiary',
      },
    }
    return colors[color] || colors['accent-primary']
  }

  return (
    <section id="linkedin-posts" className="section-container relative bg-dark-surface">
      <div className="mb-20 animate-fade-in relative z-10">
        <div className="flex items-center gap-6 mb-8">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-accent-primary to-transparent"></div>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-neutral-text tracking-tight whitespace-nowrap">
            LinkedIn <span className="text-accent-primary">Posts</span>
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-accent-secondary to-transparent"></div>
        </div>
        <p className="text-neutral-text-medium max-w-2xl text-lg leading-relaxed">
          Sharing insights on AI, ML, and software engineering
        </p>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-8">
          {linkedInPosts.map((post, index) => (
            <PostCard
              key={post.id}
              post={post}
              index={index}
              hoveredPost={hoveredPost}
              setHoveredPost={setHoveredPost}
              getColorClasses={getColorClasses}
            />
          ))}
        </div>

        {/* View More Link */}
        <div className="text-center mt-12">
          <a
            href="https://www.linkedin.com/in/kanishkashra/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-dark-surface-1dp border-2 border-accent-primary/30 text-accent-primary text-sm font-semibold hover:bg-accent-primary/10 hover:border-accent-primary transition-all duration-300 rounded-lg"
          >
            <FaLinkedin />
            <span>View All Posts on LinkedIn</span>
            <FaExternalLinkAlt className="text-xs" />
          </a>
        </div>
      </div>
    </section>
  )
}

export default LinkedInPosts

