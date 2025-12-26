import { MemberDiseaseSelection, Policy } from './logic/underwriting';

export interface ChecklistItem {
  id: string;
  label: string;
  isChecked: boolean;
  isMandatory: boolean;
  category: string;
}

export interface FamilyMember {
  id: string;
  name: string;
  age: number | '';
  gender: 'Male' | 'Female';
}

export type AppView = 'SETUP' | 'PROFILE' | 'RECOMMENDATION';

export interface AppState {
  view: AppView;
  checklist: ChecklistItem[];
  members: FamilyMember[];
  // Mapping memberId to their disease profile
  memberProfiles: Record<string, MemberDiseaseSelection[]>;
  currentMemberId: string | null; // For the tab view
  isPortingCase: boolean;
}

export interface AppContextType extends AppState {
  toggleChecklist: (id: string) => void;
  setPortingCase: (isPorting: boolean) => void;
  addMember: (member: FamilyMember) => void;
  updateMember: (id: string, updates: Partial<FamilyMember>) => void;
  removeMember: (id: string) => void;
  setMembers: (members: FamilyMember[]) => void;
  updateMemberCondition: (memberId: string, condition: MemberDiseaseSelection) => void;
  removeMemberCondition: (memberId: string, diseaseId: string) => void;
  setCurrentMemberId: (id: string) => void;
  setView: (view: AppView) => void;
  canGenerateRecommendation: boolean;
}
