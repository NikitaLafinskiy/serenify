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

export interface TimerParams {
  breaths: number;
  inhale: number;
  exhale: number;
  hold: number;
}

export interface ModalState {
  isActive: boolean;
  innerComponent: "auth" | "options" | undefined;
  isSettingsMode: boolean;
}

export interface AuthState {
  isSignUp: boolean;
}
