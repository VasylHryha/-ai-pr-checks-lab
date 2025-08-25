<template>
  <header style="padding: 1rem; border-bottom: 1px solid #eee;">
    <nav style="display:flex; gap:1rem;">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </nav>
  </header>

  <main style="padding: 1rem;">
    <RouterView />
  </main>
</template>
