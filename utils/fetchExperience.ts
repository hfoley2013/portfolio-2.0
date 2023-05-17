import { Experience } from "../typings";

export const fetchExperience = async() => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/experience`);
  const data = await res.json();
  const experience: Experience[] = data.experiences;
  
  return experience;
}
