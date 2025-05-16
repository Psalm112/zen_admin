//user
export interface UserProfile {
    milestones: {
      sales: number;
      purchases: number;
    };
    _id: string;
    googleId: string;
    email: string;
    name: string;
    profileImage: File | string;
    isMerchant: boolean;
    rating: number;
    totalPoints: number;
    availablePoints: number;
    referralCount: number;
    isReferralCodeUsed: boolean;
    referralCode: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
    address?: string;
    dateOfBirth?: string;
    phoneNumber?: string;
  }