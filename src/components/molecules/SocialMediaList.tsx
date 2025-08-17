import socialMediaData from "@/const/socialMediaData.json";
import Link from "next/link";
import { assetUrl } from "@/const/basePath";

export default function SocialMediaList() {
    return (
        <ul className="flex items-center justify-center lg:justify-end gap-7">
            {socialMediaData.map(({link, label, icon}) => {
                const src = assetUrl(`/img/contact-icons/contact-${icon}`);
                return (
                    <li key={label}>
                        <Link
                            href={link}
                            aria-label={label}
                            style={{
                                WebkitMaskImage: `url(${src})`,
                                maskImage: `url(${src})`,
                            }}
                            className="block size-10 cursor-pointer transition bg-gray-500 hover:scale-115 [mask-size:contain] [mask-repeat:no-repeat] [mask-position:center]"
                        >
                            <span className="sr-only">{label}</span>
                        </Link>
                    </li>
                );
            })}
        </ul>
    )
}
