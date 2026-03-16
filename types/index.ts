export interface User {
  id: string;
  email: string;
  username: string;
  image_url: string;
  bio?: string;
  created_at: string;
}

export interface Stream {
  id: string;
  user_id: string;
  title: string;
  thumbnail_url: string;
  server_url: string;
  stream_key: string;
  is_live: boolean;
  category: string;
  created_at: string;
}