import { useQuery } from "@tanstack/react-query";
import { ProfileService } from "../services/services.profile";
import { ApiResponse, UserProfile } from "../types/profile";


export const useProfiles = (filter:string = 'all') => {
  return useQuery<UserProfile[], Error, ApiResponse>({
    queryKey: ["profile", filter],
    queryFn: (): Promise<UserProfile[]> => 
    new ProfileService().getByFilter(filter).then(res => res.data),
    staleTime: 0,
    refetchOnWindowFocus: false
  });
}