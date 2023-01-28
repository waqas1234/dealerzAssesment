import {
	CallIcon,
	EmailIcon,
	LocationIcon,
	LogoLightImage,
} from "@assets/images/index";
import React from "react";

export default function Footer() {
	return (
		<div className="bg-secondary py-[73px] text-white">
			<div className="container">
				<img src={LogoLightImage} alt="logo-light" className="mb-[30px]" />
				<div className="flex flex-wrap">
					<div className="w-full lg:w-1/2 px-4 flex flex-col">
						<div className="flex-1 max-w-[440px]">
							<p>
								OurStudio is a digital agency UI / UX Design and Website
								Development located in Ohio, United States of America
							</p>
						</div>
						<p>Copyright Tanah Air Studio</p>
					</div>
					<div className="w-full lg:w-1/2 px-4">
						<div className="flex flex-wrap">
							<div className="w-full lg:w-1/2">
								<h3 className="font-bold text-base mb-[29px]">
									Our Social Media
								</h3>
								<ul className="footer-list">
									<li>
										<a href="#Facebook">Facebook</a>
									</li>
									<li>
										<a href="#Twitter">Twitter</a>
									</li>
									<li>
										<a href="#Instagram">Instagram</a>
									</li>
									<li>
										<a href="#Youtube">Youtube</a>
									</li>
								</ul>
							</div>
							<div className="w-full lg:w-1/2">
								<h3 className="font-bold text-base mb-[29px]">Contact</h3>
								<ul className="footer-list">
									<li>
										<img src={LocationIcon} alt="" />
										8819 Ohio St. South Gate, California 90280
									</li>
									<li>
										<img src={EmailIcon} alt="" />
										<a href="mailto:ourstudio@hello.com">ourstudio@hello.com</a>
									</li>
									<li>
										<img src={CallIcon} alt="" />
										<a href="tel:+271 386-647-3637">+271 386-647-3637</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
