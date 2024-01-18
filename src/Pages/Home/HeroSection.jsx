export default function HeroSection()
{
    return (
        <section id="herosection" className="hero--section">
        <div className="hero--section--content--box">
            <div className="hero--section--content">
                <p className="section--title">Hi, I'm Ankit Kumar</p>
                <h1 className="hero--section--title">
                    <span className="hero--section-title--color">Frontend Developer</span>
                </h1>
                <p className="hero--section-description">I'm a Final Year Computer Science Engineering Student at LPU,Punjab. Primarily interested in Web Development.</p>
                <a href="https://drive.google.com/file/d/1zmo01tOuIsGbTaQBNgFSze_6OcrJ-7vu/view?usp=drive_link" target="_blank" id="res" className="btn btn-primary neno-button shadow-xl hover:shadow-fuchsia-800/50 text-white border-2 hover:bg-fuchsia-800 border-fuchsia-800 rounded-lg py-4 px-8 uppercase relative overflow-hidden">Resume</a>
            </div>
        </div>
        <div className="image-container">
            <img src="./ankithero.jpeg" alt="Hero Section" />
        </div>
    </section>
    

    );

}