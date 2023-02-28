export default ({ text }) => {
  return (
    <a href="#" className="py-4 relative group">
      <span className="group-hover:text-orange-primary">{text}</span>
      <span className="absolute bottom-0 block w-full h-1 group-hover:bg-orange-primary scale-x-0 transition-all duration-300 group-hover:scale-x-100 "></span>
    </a>
  );
};