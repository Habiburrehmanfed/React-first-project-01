const HeroSection = () => {
    return (
        <section className="hero-section-container container-fluid">
            <div className="main-content-box">
                <div className="content-box">
                    <h1 className="main-heading">YOUR FEET DESERVE THE BEST</h1>
                    <p className="description">
                        YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU
                        WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE
                        TO HELP YOU WITH OUR SHOES.
                    </p>
                    <div className="buttons-box">
                        <button className="shopNow-btn">Shop Now</button>
                        <button className="category-btn">Category</button>
                    </div>
                    <div className="availableOn">
                        <p className="text">Also Available On</p>
                        <div className="icons-box">
                            <img
                                src="./images/flipkart.png"
                                alt="flipkart icon"
                            />
                            <img src="./images/amazon.png" alt="amazon icon" />
                        </div>
                    </div>
                </div>
                <div className="img-box">
                    <img src="./images/shoe_image.png" alt="" />
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
