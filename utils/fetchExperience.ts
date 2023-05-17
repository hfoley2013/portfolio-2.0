import { Experience } from "../typings";

export const fetchExperience = async() => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/experience`, {
      next: {
        revalidate: 3600
      }
    });
    const data = await res.json();
    const experience: Experience[] = data.experiences;
    
    return experience;
    
  } catch (error) {
    console.error(error);
  }
}
