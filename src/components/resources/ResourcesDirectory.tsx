import React, { useState, useMemo } from 'react';
import { ResourceCategory, ResourceItem, EDITORIAL_RESOURCE_SLOTS } from '@/data/resourcesData';
import { Search, Clock, Tag, X, FileText, ChevronRight, Info } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/Button';

interface ResourcesDirectoryProps {
  selectedCategory: ResourceCategory;
  onSelectCategory: (category: ResourceCategory) => void;
}

export const ResourcesDirectory: React.FC<ResourcesDirectoryProps> = ({
  selectedCategory,
  onSelectCategory,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeSlotModal, setActiveSlotModal] = useState<ResourceItem | null>(null);

  // Filter logic across editorial slots
  const filteredSlots = useMemo(() => {
    return EDITORIAL_RESOURCE_SLOTS.filter((item) => {
      // Category filter
      const matchesCategory =
        selectedCategory === 'all' || item.category === selectedCategory;

      // Search query filter (matches title, description, type, topics)
      const query = searchQuery.trim().toLowerCase();
      const matchesSearch =
        query === '' ||
        item.title.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query) ||
        item.type.toLowerCase().includes(query) ||
        item.topics.some((t) => t.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="resource-directory" className="py-16 md:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header & Search Bar Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-8 border-b border-slate-200">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-[#00695C]" />
              <span className="text-xs font-mono uppercase tracking-widest text-[#00695C] font-semibold">
                DIRECTORY
              </span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#191C1B] tracking-tight">
              Planned Editorial Library
            </h2>
            <p className="text-sm text-slate-500 mt-1">
              Curated material under development. Real content will be published directly to these architectural slots.
            </p>
          </div>

          {/* Search Input */}
          <div className="w-full md:w-80 relative">
            <label htmlFor="resource-search-input" className="sr-only">
              Search resources
            </label>
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                id="resource-search-input"
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search planned topics or tags..."
                className="w-full pl-10 pr-9 py-2.5 bg-slate-50 border border-slate-200 rounded-full text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#00695C] focus:bg-white transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-1"
                  aria-label="Clear search"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Active Filter Bar if filtered */}
        <div className="flex items-center justify-between mb-8 text-xs font-mono text-slate-500">
          <div className="flex items-center gap-2">
            <span>SHOWING:</span>
            <span className="px-2 py-0.5 rounded bg-teal-50 text-[#00695C] font-semibold uppercase border border-teal-200/60">
              {selectedCategory.toUpperCase()}
            </span>
            {searchQuery && (
              <span>
                MATCHING &ldquo;<span className="text-slate-900 font-medium">{searchQuery}</span>&rdquo;
              </span>
            )}
          </div>
          <span>
            {filteredSlots.length} {filteredSlots.length === 1 ? 'SLOT PLANNED' : 'SLOTS PLANNED'}
          </span>
        </div>

        {/* Directory Grid / Empty State */}
        {filteredSlots.length === 0 ? (
          /* Empty Search State */
          <div className="bg-[#F8FAF8] border border-dashed border-slate-300 rounded-2xl p-10 sm:p-16 text-center max-w-2xl mx-auto">
            <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 mx-auto mb-4">
              <Search className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">
              No published resources match your search.
            </h3>
            <p className="text-sm text-slate-600 mb-6">
              More content is being prepared. We are actively writing verified guides and architectural documentation.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="px-4 py-2 rounded-full text-xs font-mono bg-white border border-slate-300 text-slate-700 hover:bg-slate-50 cursor-pointer font-medium"
                >
                  Clear search query
                </button>
              )}
              {selectedCategory !== 'all' && (
                <button
                  onClick={() => onSelectCategory('all')}
                  className="px-4 py-2 rounded-full text-xs font-mono bg-[#00695C] text-white hover:bg-[#005a4e] cursor-pointer font-medium"
                >
                  Show all categories
                </button>
              )}
            </div>
          </div>
        ) : (
          /* Structured Editorial Resource Slots Grid */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSlots.map((slot) => (
              <div
                key={slot.id}
                className="bg-[#F8FAF8] hover:bg-white border border-slate-200/90 hover:border-slate-300 rounded-2xl p-6 transition-all duration-200 flex flex-col justify-between group shadow-2xs hover:shadow-xs"
              >
                <div>
                  {/* Top Bar: Type + Coming Soon Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white border border-slate-200 text-slate-700 text-[11px] font-mono font-semibold uppercase">
                      <FileText className="w-3 h-3 text-[#00695C]" />
                      {slot.type}
                    </span>

                    <span className="inline-flex items-center gap-1 text-[11px] font-mono text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200/60 font-medium">
                      <Clock className="w-3 h-3 text-amber-600" />
                      Coming soon
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-display text-lg font-bold text-slate-900 leading-snug mb-3 group-hover:text-[#00695C] transition-colors">
                    {slot.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-slate-600 leading-relaxed mb-5">
                    {slot.description}
                  </p>

                  {/* Topic Chips */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {slot.topics.map((topic, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono bg-white text-slate-500 border border-slate-200"
                      >
                        <Tag className="w-2.5 h-2.5 text-slate-400" />
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Action */}
                <div className="pt-4 border-t border-slate-200/80 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-slate-400">
                    UNPUBLISHED DRAFT
                  </span>
                  <button
                    onClick={() => setActiveSlotModal(slot)}
                    className="inline-flex items-center gap-1 text-xs font-mono font-semibold text-[#00695C] hover:text-[#005a4e] cursor-pointer group-hover:translate-x-0.5 transition-transform"
                    aria-label={`View details for ${slot.title}`}
                  >
                    <span>Inspect scope</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>

      {/* Detail Modal for Unpublished Slots */}
      {activeSlotModal && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 backdrop-blur-xs p-4 animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
          aria-labelledby="slot-modal-title"
        >
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 border border-slate-200 shadow-xl relative">
            <button
              onClick={() => setActiveSlotModal(null)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-100 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 mb-4">
              <span className="px-2.5 py-1 rounded bg-teal-50 text-[#00695C] text-xs font-mono font-semibold uppercase border border-teal-200/60">
                {activeSlotModal.type}
              </span>
              <span className="px-2.5 py-1 rounded bg-amber-50 text-amber-800 text-xs font-mono font-medium border border-amber-200/60">
                Coming soon
              </span>
            </div>

            <h3 id="slot-modal-title" className="text-xl font-bold text-slate-900 mb-3">
              {activeSlotModal.title}
            </h3>

            <p className="text-sm text-slate-600 leading-relaxed mb-6">
              {activeSlotModal.description}
            </p>

            <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 mb-6">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-500 font-semibold mb-2">
                <Info className="w-3.5 h-3.5 text-[#00695C]" />
                <span>PLANNED WORKFLOW TOPICS</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {activeSlotModal.topics.map((t, idx) => (
                  <span key={idx} className="text-xs bg-white border border-slate-200 px-2.5 py-1 rounded text-slate-700 font-mono">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between pt-2 border-t border-slate-100">
              <span className="text-xs font-mono text-slate-400">
                NO REGISTRATION REQUIRED
              </span>
              <Button
                variant="filled"
                size="sm"
                onClick={() => setActiveSlotModal(null)}
                className="bg-[#00695C] text-white"
              >
                Close
              </Button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
