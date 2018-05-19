export const userState: UserState = {
  isSigningUp: false,
  isLoggingIn: false,
  isLoggedIn: false,
  loginForm: {
    username: '',
    password: ''
  },
  user: null
};

export interface UserState {
  isSigningUp: boolean;
  isLoggingIn: boolean;
  isLoggedIn: boolean;
  loginForm: LoginForm;
  user: User;
}

export interface LoginForm {
  username: string;
  password: string;
}

export interface User {
  id: string;
  ttl: number;
  created: string;
  userId: string;
  me: Me,
  totalArticles?: {
    count: number;
  },
  avatar: Avatar
}

export interface Avatar {
  userId: string;
  avatar: string;
}

export interface Me {
  username: string;
}
