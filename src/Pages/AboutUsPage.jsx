
    import Header from "../Components/Header"
    import AboutUs from "../Components/AboutUs"
    import Footer from "../Components/Footer"

    const AboutUsPage = () => {

        return (
            <div className="AboutUsPage bg-gray-100 min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow">
            <section className="py-12 bg-white shadow-lg rounded-lg mx-4 sm:mx-8 lg:mx-16">
                <AboutUs />
            </section>
            </main>
            <Footer />
        </div>
        )
    }

    export default AboutUsPage