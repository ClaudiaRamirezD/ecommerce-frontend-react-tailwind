import CartIcon from '@/components/icons/CartIcon'

export default () => {
  return (
    <section className="mx-auto px-5 md:px-0 container">
      <p className="mb-3 font-bold uppercase tracking-wide text-orange-primary">
        Sneaker Company
      </p>
      <h2 className="mb-5 text-3xl font-bold">Fall Limited Edition Sneakers</h2>
      <p className="mb-5 font-bold text-dark-grayish-blue">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </p>
      <div className="mb-5 grid grid-cols-3 items-center gap-4 md:grid-cols-[1fr_3fr]  font-bold ">
        <span className="text-3xl">$125.00</span>
        <span className="mr-auto rounded-md bg-pale-orange py-1 px-2 text-orange-primary">
          50%
        </span>
        <span className="text-right text-lg text-grayish-blue md:col-span-3 md:text-left line-through">
          $250.00
        </span>
      </div>
      <div className="grid md:gap-3 grid-cols-3 font-bold md:grid-cols-[1fr_1.8fr]">
        <div className="col-span-3 bg-gray-200 flex items-center justify-between px-5 py-3 mb-5 md:col-span-1 rounded-md ">
          <button className='text-3xl text-orange-primary'>-</button>
          <span className='text-xl'>0</span>
          <button className='text-3xl text-orange-primary'>+</button>
        </div>
        <button className="col-span-3  justify-center rounded-md md:col-span-1 gap-x-3 bg-orange-primary hover:bg-orange-700 py-3 text-white items-center flex mb-5 transition-all">
                  <CartIcon fill='#fff' />
                  <span>Add to cart</span>
        </button>
      </div>
    </section>
  );
};
