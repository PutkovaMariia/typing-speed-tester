import SocialMediaList from "@/components/molecules/SocialMediaList";
import {useMemo} from "react";

export default function Footer() {
    const currentYear = useMemo(() => new Date().getFullYear(), []);
    return (
        <footer
            className="mt-auto w-full px-6 pb-3 flex flex-col-reverse lg:flex-row gap-y-5 items-center justify-between">
            <div className="font-normal text-sm lg:text-base flex items-center justify-center lg:justify-start">
                <p>
                    &copy; Mariia Putkova {currentYear}. All rights reserved
                </p>
            </div>
            <SocialMediaList/>
        </footer>
    );
}
