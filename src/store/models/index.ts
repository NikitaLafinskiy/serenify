export interface TimerState {
  breaths: number;
  currentBreaths: number;
  inhale: number;
  currentInhale: number;
  exhale: number;
  currentExhale: number;
  hold: number;
  currentHold: number;
  inhaleMode: "inhale" | "exhale" | "idle";
  breathMode: "breath" | "hold";
}

export interface ModalState {
  isActive: boolean;
  innerComponent: "auth" | "options" | undefined;
  isSettingsMode: boolean;
}

export interface AuthState {
  isSignUp: boolean;
  currentUser: User | undefined;
}

export interface User {
  id: string;
  username: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Options {
  breaths: number;
  inhale: number;
  exhale: number;
  hold: number;
}
