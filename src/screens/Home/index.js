import React from "react";
import HeroSection from "@components/Home/HeroSection";
import CategoryShop from "@components/Home/Categories/CategoryShop";
import NewArrivals from "@components/Home/NewArrivals/NewProductArrivals";
import Offer from "@components/Home/Offer";
import BestSeller from "@components/Home/BestSeller";

export default function Home() {
	return (
		<>
			<HeroSection />
			<CategoryShop />
			<NewArrivals />
			<Offer />
			<BestSeller />
		</>
	);
}
