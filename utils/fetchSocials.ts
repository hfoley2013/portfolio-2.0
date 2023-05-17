import { Social } from "../typings";

export const fetchSocials = async() => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/socials`, {
      next: {
        revalidate: 3600
      }
    });
    const data = await res.json();
    const socials: Social[] = data.socials;
  
    return socials;
  } catch (error) {
    console.error(error);
  }
}
