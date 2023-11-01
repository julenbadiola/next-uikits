import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


// FIXME: Update this configuration file based on your project information

export const AppConfig = {
  site_name: 'Starter',
  title: 'Nextjs Starter',
  description: 'Starter code for your Nextjs Boilerplate with Tailwind CSS',
  locale: 'en',
};
