import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import type { ReactNode } from 'react';

interface ImageData {
	src: string;
	alt: string;
	caption?: string;
}

interface Props {
	images: ImageData[];
	autoplayInterval?: number;
}

export default function ImageSlideshow({ images, autoplayInterval = 5000 }: Props) {
	const fadeProperties = {
		duration: autoplayInterval,
		transitionDuration: 800,
		infinite: true,
		indicators: true,
		arrows: false,
		pauseOnHover: true,
	};

	return (
		<div className="slideshow-container">
			<Fade {...fadeProperties}>
				{images.map((image, index) => (
					<div key={index} className="slide">
						<img
							src={image.src}
							alt={image.alt}
							loading={index === 0 ? 'eager' : 'lazy'}
						/>
					</div>
				))}
			</Fade>
		</div>
	);
}

