//import React from 'react'

export default function ConditionalRendering() {
    const isLoggedIn = false; // Change this to false to test the other condition
  return (
    <div>
      {isLoggedIn ? (
        <p>Chào mừng bạn đã đăng nhập!</p>
      ) : (
        <button>Vui lòng đăng nhập.</button>
      )}
    </div>
  )
}
