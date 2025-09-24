

const ComponentFour = () => {
  return (
    // Main section with a light, warm beige background and padding.
    // flex and items-center are used to center the content block.
    <section className="flex flex-col items-center bg-stone-50 px-4 py-20 sm:py-24">
      
      {/* The main content card with rounded corners, shadow, and padding. */}
      <div className="w-full max-w-4xl rounded-3xl bg-white p-10 text-center shadow-lg sm:p-16">
        
        {/* Main Heading */}
        <h2 className="font-serif text-3xl font-bold text-gray-800 sm:text-4xl">
          Acknowledgement of Country
        </h2>
        
        {/* Decorative divider line */}
        <div className="mx-auto my-8 h-px w-24 bg-stone-200"></div>
        
        {/* Paragraphs container with spacing between children */}
        <div className="space-y-6 font-serif text-base leading-relaxed text-gray-600 sm:text-lg">
          <p>
            The International Institute of Data Intelligence (IIDI) recognizes the traditional custodians.
          </p>
          <p>
            We acknowledge gratefully the knowledge systems and input of indigenous peoples in helping to shape our perspective on these issues, but that means integrating it into education.
          </p>
          <p>
            To this end IIDI works diligently to promote an inclusive environment in which diversity, cultural awareness and reconciliation is always paramount.
          </p>
        </div>
      </div>
      
      {/* Caption text below the card */}
      <p className="mt-8 max-w-2xl text-center text-sm text-gray-500">
        This acknowledgement is offered with respect and a commitment to ongoing learning.
      </p>
      
    </section>
  );
};

export default ComponentFour;