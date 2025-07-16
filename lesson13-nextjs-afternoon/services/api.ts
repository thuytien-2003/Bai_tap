import type { Task } from "../types";

const baseUrl = 'https://server.aptech.io';

const getToken = () => localStorage.getItem('access_token') || '';

const defaultHeaders = () => ({
  'Content-Type': 'application/json',
  Accept: 'application/json',
  Authorization: `Bearer ${getToken()}`,
});

export const login = async (username: string, password: string) => {
  const response = await fetch(`${baseUrl}/auth/login`, {
    method: 'POST',
    headers: defaultHeaders(),
    body: JSON.stringify({ username, password }),
  });
  return response.json();
};

export const getTasks = async () => {
  const response = await fetch(`${baseUrl}/workspaces/tasks`, {
    headers: defaultHeaders(),
  });
  return response.json();
};

// ... Các API khác bạn đã viết như getTaskById, createTask, updateTask
