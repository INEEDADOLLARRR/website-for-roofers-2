// Article data and loader utilities
// Uses static data instead of markdown file parsing for Vite SPA compatibility

export interface Article {
    slug: string;
    title: string;
    excerpt: string;
    date: string;
    author: string;
    category: string;
    tags: string[];
    featuredImage: string;
    content: string;
}

const articles: Article[] = [
    {
        slug: "commercial-roofing-systems-guide",
        title: "The Complete Guide to Commercial Roofing Systems",
        excerpt: "Explore the engineering behind TPO, EPDM, and liquid-applied membrane systems — and how to select the ideal solution for your commercial property.",
        date: "2026-02-20",
        author: "Verrazano Editorial",
        category: "Commercial",
        tags: ["commercial roofing", "TPO", "EPDM", "membrane systems"],
        featuredImage: "https://picsum.photos/seed/commercial-roof/1200/630",
        content: `
## Understanding Commercial Roofing Systems

Commercial roofing is an entirely different discipline from residential work. The scale, materials, and engineering precision required demand specialized expertise that few contractors possess.

### TPO (Thermoplastic Polyolefin)

TPO has rapidly become one of the most popular commercial roofing membranes in the industry. Its reflective white surface provides exceptional energy efficiency, while its heat-welded seams create a monolithic, watertight barrier.

**Key Advantages:**
- Superior UV resistance and energy efficiency
- Heat-welded seams for permanent waterproofing
- Lightweight and cost-effective installation
- Excellent chemical resistance

### EPDM (Ethylene Propylene Diene Monomer)

EPDM is the time-tested standard of commercial roofing. This synthetic rubber membrane has proven its durability across decades of service on everything from warehouses to hospitals.

**Key Advantages:**
- 50+ year proven track record
- Exceptional flexibility in extreme temperatures
- Low maintenance requirements
- Superior resistance to ozone and weathering

### Liquid-Applied Membrane Systems

Liquid-applied coatings represent the cutting edge of roofing technology. These seamless elastomeric membranes conform to every surface detail, eliminating the weak points that traditional systems create at seams and penetrations.

**Key Advantages:**
- Seamless, monolithic coverage
- Conforms to complex geometries
- Can be applied over existing roofing
- Extends roof lifespan by 15-25 years

## Choosing the Right System

The selection of a commercial roofing system should never be driven by cost alone. Factors including building use, local climate, structural load capacity, and long-term maintenance strategy all play critical roles in determining the optimal solution.

At Verrazano Roofing, we begin every commercial project with a comprehensive structural analysis to ensure the recommended system delivers maximum performance for your specific application.
    `.trim()
    },
    {
        slug: "liquid-applied-coatings-ultimate-guide",
        title: "Liquid-Applied Coatings: The Future of Roof Restoration",
        excerpt: "How elastomeric liquid coatings are revolutionizing roof maintenance — eliminating costly tear-offs and extending roof life by decades.",
        date: "2026-02-15",
        author: "Verrazano Editorial",
        category: "Technology",
        tags: ["liquid coatings", "elastomeric", "roof restoration", "coatings"],
        featuredImage: "https://picsum.photos/seed/liquid-coat/1200/630",
        content: `
## The Revolution in Roof Restoration

Traditional roof replacement is expensive, disruptive, and environmentally wasteful. Liquid-applied elastomeric coatings have fundamentally changed this equation, offering property owners a way to restore and extend their roof's life without the cost and disruption of a complete tear-off.

### What Are Liquid-Applied Coatings?

Liquid-applied coatings are high-performance elastomeric membranes applied directly to existing roof surfaces. When cured, they form a seamless, flexible, waterproof barrier that bonds permanently to the substrate.

### The Science Behind the Technology

Modern elastomeric coatings are engineered at the molecular level to deliver:

- **Extreme Elongation**: Up to 600% stretch without cracking
- **UV Stability**: Reflective surfaces that reduce cooling costs by 20-30%
- **Self-Healing Properties**: Minor surface damage repairs itself under heat
- **Chemical Resistance**: Withstands industrial pollutants and acid rain

### Cost Comparison: Coating vs. Replacement

| Factor | Full Replacement | Liquid Coating |
|--------|-----------------|----------------|
| Cost per sq ft | $8-15 | $3-6 |
| Downtime | 2-4 weeks | 2-5 days |
| Waste generated | 10+ tons | Near zero |
| Life extension | 20-30 years | 15-25 years |
| Energy savings | Moderate | Significant |

### The Application Process

1. **Surface Preparation**: Thorough cleaning and repair of existing substrate
2. **Primer Application**: Adhesion-promoting primer matched to substrate type
3. **Reinforcement**: Fabric reinforcement at penetrations and transitions
4. **Coating Application**: Multiple coats of elastomeric membrane
5. **Quality Inspection**: Mil-thickness verification and adhesion testing

### When to Choose Coatings

Liquid coatings are ideal when your existing roof structure is sound but the membrane has reached end-of-life. They're particularly effective on metal roofs, modified bitumen, and single-ply systems that still have structural integrity.
    `.trim()
    },
    {
        slug: "seasonal-roof-maintenance-checklist",
        title: "The Property Manager's Seasonal Roof Maintenance Checklist",
        excerpt: "A comprehensive season-by-season guide to protecting your commercial roof investment and preventing costly emergency repairs.",
        date: "2026-02-10",
        author: "Verrazano Editorial",
        category: "Maintenance",
        tags: ["maintenance", "property management", "checklist", "seasonal"],
        featuredImage: "https://picsum.photos/seed/maintenance/1200/630",
        content: `
## Why Seasonal Maintenance Matters

A commercial roof represents 5-15% of a building's total construction cost, yet it's often the most neglected component until catastrophic failure occurs. Proactive seasonal maintenance can extend roof life by 50% and reduce emergency repair costs by up to 80%.

### Spring Inspection (March-May)

After winter's assault on your roofing system, spring inspection is critical:

- **Drainage Assessment**: Clear all drains, scuppers, and gutters of debris
- **Membrane Inspection**: Check for winter storm damage, punctures, or lifting
- **Flashing Review**: Inspect all metal flashings for corrosion or separation
- **Sealant Check**: Verify all caulking and sealants at penetrations
- **Vegetation Removal**: Clear any organic growth that may have taken root

### Summer Maintenance (June-August)

Heat and UV exposure take their toll during summer months:

- **Reflectivity Check**: Ensure reflective coatings are performing properly
- **Thermal Movement**: Inspect expansion joints and seams for stress
- **HVAC Impact**: Verify equipment pads and supports are secure
- **Ponding Water**: Check for areas of standing water after summer storms

### Fall Preparation (September-November)

Preparing for winter is the most important seasonal task:

- **Complete Drainage Service**: Ensure all drainage paths are completely clear
- **Secure Loose Components**: Tighten all fasteners and equipment mounts
- **Emergency Kit**: Prepare temporary repair materials for winter storms
- **Documentation**: Photograph current conditions for baseline comparison

### Winter Monitoring (December-February)

Winter requires vigilance without unnecessary roof traffic:

- **Snow Load Monitoring**: Track accumulation against structural limits
- **Ice Dam Prevention**: Ensure adequate insulation and ventilation
- **Interior Inspection**: Check for signs of leaks or condensation
- **Emergency Response**: Have contractor on retainer for urgent issues

## The ROI of Preventive Maintenance

Studies consistently show that every $1 invested in preventive roof maintenance returns $4-8 in avoided repair costs. A comprehensive maintenance program isn't an expense — it's the highest-ROI investment you can make in your building envelope.
    `.trim()
    }
];

export function getAllArticles(): Article[] {
    return articles.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getArticleBySlug(slug: string): Article | undefined {
    return articles.find(a => a.slug === slug);
}

export function getArticlesByCategory(category: string): Article[] {
    return articles.filter(a => a.category === category);
}

export function getAllCategories(): string[] {
    return [...new Set(articles.map(a => a.category))];
}

export function getRelatedArticles(currentSlug: string, limit = 3): Article[] {
    const current = getArticleBySlug(currentSlug);
    if (!current) return articles.slice(0, limit);

    return articles
        .filter(a => a.slug !== currentSlug)
        .sort((a, b) => {
            const aMatch = a.tags.filter(t => current.tags.includes(t)).length;
            const bMatch = b.tags.filter(t => current.tags.includes(t)).length;
            return bMatch - aMatch;
        })
        .slice(0, limit);
}
