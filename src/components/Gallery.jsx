export default function Gallery() {
  const slots = new Array(8).fill(0)
  return (
    <section className="section-alt" id="gallery">
      <div className="container">
        <h2 className="heading-2 text-center">Gallery</h2>
        <p className="subtle text-center mt-2">Add your class photos, score screenshots, or events here.</p>
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
          {slots.map((_, i) => (
            <div key={i} className="aspect-square soft-surface flex items-center justify-center text-slate-400">
              <span className="text-xs">Image {i + 1}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

