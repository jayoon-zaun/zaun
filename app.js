/**
 * (주)건축사사무소자운경 | zaunkyeoung architects
 * Pure Vanilla JavaScript (No Build Step Required)
 */

(function () {
  'use strict';

  // Google Drive edge CDN image helper
  function getDriveImageUrl(fileId, width = 1600) {
    return `https://lh3.googleusercontent.com/d/${fileId}=w${width}-rw`;
  }

  function getOptimizedDriveUrl(url, width = 1000) {
    if (!url) return '';
    if (url.includes('lh3.googleusercontent.com/d/')) {
      const base = url.split('=')[0];
      return `${base}=w${width}-rw`;
    }
    return url;
  }

  // 6 Curated Architectural Projects
  const PROJECTS = [
    {
      id: 'muk-1-dong-community-center',
      number: '01',
      titleKo: '묵1동 복합청사',
      titleEn: 'Muk 1-dong Complex Community Center',
      locationKo: '서울시 중구',
      locationEn: 'Jung-gu, Seoul',
      projectTypeKo: '설계공모당선작',
      projectTypeEn: 'Competition Winner',
      year: 'in progress',
      aspectRatio: '1600 / 1200',
      heroImage: getDriveImageUrl('1sgLRTyTvYBSUXLE7yOyAtjuO7jIglTN-'),
      images: [
        getDriveImageUrl('1sgLRTyTvYBSUXLE7yOyAtjuO7jIglTN-'),
        getDriveImageUrl('1nyn7QMD_-9f2KcLPamHg1VwNIEfweOXD'),
        getDriveImageUrl('1EV7z-lPUH0eRx4F8OIUo9pwhTzuU1x5j'),
        getDriveImageUrl('11WkngNKlme-_IIZ3P0r5TfnrEM0iq3-J'),
        getDriveImageUrl('1IzypdGQbQA4FiHDkcO6UZjTh1Lfm0otu'),
        getDriveImageUrl('1VN5hflXfx9hwKNxJwsHmHt4JiHvNq1VS'),
      ],
    },
    {
      id: 'hongje-hongeun-childcare-center',
      number: '02',
      titleKo: '홍제홍은 종합보육시설',
      titleEn: 'Hongje-Hongeun Childcare Complex Center',
      locationKo: '서울시 서대문구',
      locationEn: 'Seodaemun-gu, Seoul',
      projectTypeKo: '설계공모당선작',
      projectTypeEn: 'Competition Winner',
      year: 'in progress',
      aspectRatio: '1586 / 1586',
      heroImage: getDriveImageUrl('1XIU6jUDJg7KpiWkQqCXZ4nKvpJQl0HZr'),
      images: [
        getDriveImageUrl('1XIU6jUDJg7KpiWkQqCXZ4nKvpJQl0HZr'),
        getDriveImageUrl('1-YEsVn6eAw10pyjTh2BHmCiVQoVB1AFc'),
        getDriveImageUrl('1e2YsEliAQcarJYLZ6dhHdVroRI-xot9Z'),
        getDriveImageUrl('1VodzijBVl1xruIDTfALoaYQBOa00cL7d'),
        getDriveImageUrl('1Yjqdevgv47VoQ1Zo0rlkoLvv-5jfsrvd'),
        getDriveImageUrl('1UMa-LYAxm6XXYVuTb8rj_vFORFnnVSxE'),
        getDriveImageUrl('11L9jYNJJpufGzGArgJWBOW2LfmU4Aj92'),
        getDriveImageUrl('1FHG1f-hE2J-aFbylIGan6aE6FSzLHbI4'),
        getDriveImageUrl('1wHpyCK81OdKW6N51P2Lc2J69DGDvRx6s'),
      ],
    },
    {
      id: 'panessima-bakery-factory',
      number: '03',
      titleKo: '파네시마 베이커리공장',
      titleEn: 'Panessima Bakery Factory',
      locationKo: '용인시 처인구',
      locationEn: 'Cheoin-gu, Yongin',
      projectTypeKo: '신축프로젝트',
      projectTypeEn: 'New Construction',
      year: '2024',
      aspectRatio: '1600 / 1600',
      heroImage: getDriveImageUrl('1MWMv9DFPOz3UsAnqIcBiA2M_ZPEB7fG9'),
      images: [
        getDriveImageUrl('1MWMv9DFPOz3UsAnqIcBiA2M_ZPEB7fG9'),
        getDriveImageUrl('1S1aA3tUzZSNK6g9M_E0luPqHd1VnkGOU'),
        getDriveImageUrl('1DMtR8C4A6mXYc7L_p8lb1to8fHTC3Lkz'),
        getDriveImageUrl('10t-J9Goadm51zmNn1dRtH4T0JpiKT7pf'),
        getDriveImageUrl('19iGLrEpXm5zyLeMTJIbWoVe8naHmFvB3'),
        getDriveImageUrl('1a6OIOik7rKg8FQXx-HoLiBzEomZYzMe6'),
        getDriveImageUrl('1g5NRuBdxNHaRp8VTqEcdPYPgIQDixMUi'),
      ],
    },
    {
      id: 'craft-museum-annex-hanok',
      number: '04',
      titleKo: '공예박물관 부속한옥',
      titleEn: 'Craft Museum Annex Hanok',
      locationKo: '서울시 종로구',
      locationEn: 'Jongno-gu, Seoul',
      projectTypeKo: '증개축프로젝트',
      projectTypeEn: 'Renovation & Extension',
      year: '2021',
      aspectRatio: '1072 / 1600',
      heroImage: getDriveImageUrl('1q48mjOVDNG4UxGu0-n9aIZtJGmv-nZug'),
      images: [
        getDriveImageUrl('1q48mjOVDNG4UxGu0-n9aIZtJGmv-nZug'),
        getDriveImageUrl('1sZ0epZn-8hT8zJX9nChtM9G5sUDMk7ai'),
        getDriveImageUrl('1dxuzSx0r2ynnLrnFgLwv0romkskjszrJ'),
        getDriveImageUrl('1livVfkXoNps7j3TmjANwBopt5F5Hf90c'),
        getDriveImageUrl('10aKzPv6f4QHaah6J5cKnut8WmXQVz9ve'),
        getDriveImageUrl('1nLbGIDgm3ftRcxWNGH6xCY_PLTxqcFx6'),
      ],
    },
    {
      id: 'dongtan-commercial-residence',
      number: '05',
      titleKo: '동탄상가주택',
      titleEn: 'Dongtan Commercial Residence',
      locationKo: '화성시 목동',
      locationEn: 'Mok-dong, Hwaseong',
      projectTypeKo: '신축프로젝트',
      projectTypeEn: 'New Construction',
      year: '2021',
      aspectRatio: '1200 / 1600',
      heroImage: getDriveImageUrl('1hXJapT5HrgLMH3bqZhr8veM--L3I4x9R'),
      images: [
        getDriveImageUrl('1hXJapT5HrgLMH3bqZhr8veM--L3I4x9R'),
        getDriveImageUrl('1oWMuukY8zph5EzkvS7W9eIS1R83GN5nN'),
        getDriveImageUrl('1U3bBHz8YbcnoNIx4Nhnz4WWwiZWsLq7E'),
        getDriveImageUrl('1gfD_5lYXc_5xSZ5EFEQSFaD-9h-8Vlgs'),
        getDriveImageUrl('1UqCsUFzHHVqTGH9efl3BL5WbR81ew2kP'),
        getDriveImageUrl('1oFAlivUjKpEF-qFC8Fwqq6yWXNo-T4_H'),
        getDriveImageUrl('1WRmN_yO9EV_EsZTZpvQw8E3Xp6y_I4iE'),
      ],
    },
    {
      id: 'heungeop-myeon-service-center',
      number: '06',
      titleKo: '흥업면행정복지센터',
      titleEn: 'Heungeop-myeon Community Service Center',
      locationKo: '원주시 흥업면',
      locationEn: 'Heungeop-myeon, Wonju',
      projectTypeKo: '설계공모입상작',
      projectTypeEn: 'Competition Award',
      year: '2026',
      aspectRatio: '1600 / 1200',
      heroImage: getDriveImageUrl('12OvZiicuV9lQErOhRkMHUUlfkwYeX7mK'),
      images: [
        getDriveImageUrl('12OvZiicuV9lQErOhRkMHUUlfkwYeX7mK'),
        getDriveImageUrl('18LAz10n_dVoXWX7NrmaynxbObQ0ZgqNn'),
        getDriveImageUrl('1E1-oJRXQ3Isk0_fm1pGXt93UtbR5IAjY'),
        getDriveImageUrl('1cFlO54PBATzjLj2k1dxMHGuRcjiyGYVM'),
        getDriveImageUrl('1UCppdFaw7g-8uHu-r66OADzGrVBpheHY'),
        getDriveImageUrl('1RGP6yqnWa5xzzbnBT_BRgL4-6fSL7oPi'),
      ],
    },
  ];

  // State
  let currentTab = 'works';
  let activeProjectId = null;

  // DOM Elements
  const headerEl = document.getElementById('main-header');
  const worksViewEl = document.getElementById('works-view');
  const aboutViewEl = document.getElementById('about-view');
  const footerEl = document.getElementById('main-footer');
  const projectModalEl = document.getElementById('project-modal');
  const modalContainerEl = document.getElementById('modal-content-container');
  const leftColEl = document.getElementById('gallery-left-col');
  const rightColEl = document.getElementById('gallery-right-col');
  const mobileMenuEl = document.getElementById('mobile-menu-drawer');
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenuCloseBtn = document.getElementById('mobile-menu-close-btn');

  // Navigation tab switcher
  window.switchTab = function (tab) {
    currentTab = tab;
    closeProjectModal();
    closeMobileMenu();

    if (tab === 'works') {
      headerEl.classList.remove('hidden');
      footerEl.classList.remove('hidden');
      worksViewEl.classList.remove('hidden');
      aboutViewEl.classList.add('hidden');
      updateNavHighlight('works');
    } else {
      headerEl.classList.add('hidden');
      footerEl.classList.add('hidden');
      worksViewEl.classList.add('hidden');
      aboutViewEl.classList.remove('hidden');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  function updateNavHighlight(active) {
    document.querySelectorAll('.nav-works-btn').forEach((btn) => {
      if (active === 'works') {
        btn.classList.add('text-neutral-950', 'font-medium', 'border-b', 'border-neutral-950');
        btn.classList.remove('text-neutral-400');
      } else {
        btn.classList.remove('text-neutral-950', 'font-medium', 'border-b', 'border-neutral-950');
        btn.classList.add('text-neutral-400');
      }
    });
    document.querySelectorAll('.nav-about-btn').forEach((btn) => {
      if (active === 'about') {
        btn.classList.add('text-neutral-950', 'font-medium', 'border-b', 'border-neutral-950');
        btn.classList.remove('text-neutral-400');
      } else {
        btn.classList.remove('text-neutral-950', 'font-medium', 'border-b', 'border-neutral-950');
        btn.classList.add('text-neutral-400');
      }
    });
  }

  // Mobile Menu Toggling
  function toggleMobileMenu() {
    if (mobileMenuEl.classList.contains('hidden')) {
      mobileMenuEl.classList.remove('hidden');
    } else {
      mobileMenuEl.classList.add('hidden');
    }
  }

  function closeMobileMenu() {
    if (mobileMenuEl) {
      mobileMenuEl.classList.add('hidden');
    }
  }

  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', toggleMobileMenu);
  }
  if (mobileMenuCloseBtn) {
    mobileMenuCloseBtn.addEventListener('click', closeMobileMenu);
  }

  // Render Works Gallery
  function renderWorks() {
    if (!leftColEl || !rightColEl) return;

    leftColEl.innerHTML = '';
    rightColEl.innerHTML = '';

    // Distribute into 2 columns for desktop masonry
    const leftProjects = [PROJECTS[0], PROJECTS[2], PROJECTS[4]];
    const rightProjects = [PROJECTS[1], PROJECTS[3], PROJECTS[5]];

    function createCard(project, projectIndex) {
      const card = document.createElement('div');
      card.className = 'group relative w-full mb-10 md:mb-16 cursor-pointer overflow-hidden rounded-xs select-none';
      card.style.order = projectIndex + 1; // 1, 2, 3, 4, 5, 6 on mobile

      const cardImgUrl = getOptimizedDriveUrl(project.heroImage, 1000);
      const isAboveTheFold = projectIndex < 2;

      card.innerHTML = `
        <div class="relative w-full overflow-hidden bg-neutral-100 image-protected select-none" style="aspect-ratio: ${project.aspectRatio || 'auto'};">
          <img
            src="${cardImgUrl}"
            alt="${project.titleKo}"
            loading="${isAboveTheFold ? 'eager' : 'lazy'}"
            decoding="${isAboveTheFold ? 'sync' : 'async'}"
            draggable="false"
            class="w-full h-full object-cover object-center filter brightness-[0.98] transition-transform duration-700 ease-out group-hover:scale-[1.03] select-none pointer-events-none"
          />
          <!-- Hover Scrim: Desktop Only on Hover -->
          <div class="hidden lg:block absolute inset-0 bg-black/45 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

          <!-- Center Title: Desktop Hover Only (Completely Removed on Phone & Tablet) -->
          <div class="hidden lg:flex absolute inset-0 flex-col items-center justify-center p-6 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            <h3 class="font-serif text-2xl sm:text-3xl md:text-4xl text-white tracking-tight leading-tight drop-shadow-md">
              ${project.titleKo}
            </h3>
            <span class="font-sans text-xs tracking-[0.18em] uppercase text-white/80 mt-2.5 font-light drop-shadow-sm">
              ${project.titleEn}
            </span>
            <span class="font-sans text-[11px] sm:text-xs text-white/80 tracking-wider mt-2 font-light tabular-nums">
              ${project.locationKo} · ${project.projectTypeKo} · ${project.year}
            </span>
          </div>
        </div>
      `;

      // Fallback for image loading error
      const imgEl = card.querySelector('img');
      imgEl.onerror = function () {
        if (this.src.includes('lh3.googleusercontent.com/d/')) {
          const id = this.src.split('lh3.googleusercontent.com/d/')[1]?.split('?')[0]?.split('=')[0];
          if (id) {
            this.src = `https://drive.google.com/thumbnail?id=${id}&sz=w1200`;
          }
        }
      };

      card.addEventListener('click', () => {
        openProjectModal(project.id);
      });

      return card;
    }

    leftProjects.forEach((p) => {
      const idx = PROJECTS.findIndex((item) => item.id === p.id);
      leftColEl.appendChild(createCard(p, idx));
    });

    rightProjects.forEach((p) => {
      const idx = PROJECTS.findIndex((item) => item.id === p.id);
      rightColEl.appendChild(createCard(p, idx));
    });
  }

  // Open Project Detail Modal
  window.openProjectModal = function (projectId) {
    const project = PROJECTS.find((p) => p.id === projectId);
    if (!project || !projectModalEl || !modalContainerEl) return;

    activeProjectId = projectId;
    document.body.style.overflow = 'hidden';

    modalContainerEl.innerHTML = `
      <!-- Minimal Project Title & Meta -->
      <div class="pt-24 md:pt-36 pb-16 md:pb-24 px-6 text-center max-w-4xl mx-auto">
        <h1 class="font-serif text-3xl sm:text-4xl md:text-6xl text-neutral-900 tracking-tight leading-tight">
          ${project.titleKo}
        </h1>
        <p class="font-sans text-xs sm:text-sm tracking-[0.18em] uppercase text-neutral-400 mt-3 font-light">
          ${project.titleEn}
        </p>
        <p class="font-sans text-xs sm:text-sm text-neutral-500 tracking-wider mt-4 font-light tabular-nums">
          ${project.locationKo} · ${project.projectTypeKo} · ${project.year}
        </p>
      </div>

      <!-- Pure Architectural Monograph Gallery -->
      <div class="w-full space-y-12 md:space-y-24 select-none">
        ${project.images
          .map(
            (imgSrc, idx) => `
          <div class="relative w-full flex items-center justify-center bg-neutral-100/30 overflow-hidden image-protected">
            <img
              src="${imgSrc}"
              alt="${project.titleKo} - 0${idx + 1}"
              loading="${idx < 2 ? 'eager' : 'lazy'}"
              draggable="false"
              class="w-full max-w-[1920px] h-auto object-cover object-center filter brightness-[0.98] select-none pointer-events-none"
            />
            <!-- Transparent Shield: Protects image against drag and saving -->
            <div class="absolute inset-0 z-10 select-none"></div>
          </div>
        `
          )
          .join('')}
      </div>

      <!-- Bottom Close / Return Button -->
      <div class="py-24 text-center">
        <button
          onclick="closeProjectModal()"
          class="font-sans text-xs tracking-[0.24em] uppercase text-neutral-950 font-medium hover:text-neutral-500 transition-colors py-2 px-4 border-b border-neutral-950 cursor-pointer"
        >
          close
        </button>
      </div>
    `;

    // Add fallback listeners for modal images
    modalContainerEl.querySelectorAll('img').forEach((img) => {
      img.onerror = function () {
        if (this.src.includes('lh3.googleusercontent.com/d/')) {
          const id = this.src.split('lh3.googleusercontent.com/d/')[1]?.split('?')[0]?.split('=')[0];
          if (id) {
            this.src = `https://drive.google.com/thumbnail?id=${id}&sz=w1600`;
          }
        }
      };
    });

    projectModalEl.classList.remove('hidden');
    projectModalEl.scrollTop = 0;
  };

  // Close Project Detail Modal
  window.closeProjectModal = function () {
    if (!projectModalEl) return;
    projectModalEl.classList.add('hidden');
    document.body.style.overflow = 'unset';
    activeProjectId = null;
  };

  // Global Image Protection against right click & drag
  document.addEventListener('contextmenu', (e) => {
    const target = e.target;
    if (
      target.tagName === 'IMG' ||
      target.closest('img') ||
      target.closest('.image-protected')
    ) {
      e.preventDefault();
    }
  });

  document.addEventListener('dragstart', (e) => {
    const target = e.target;
    if (
      target.tagName === 'IMG' ||
      target.closest('img') ||
      target.closest('.image-protected')
    ) {
      e.preventDefault();
    }
  });

  // Escape key closes modal or drawer
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (projectModalEl && !projectModalEl.classList.contains('hidden')) {
        closeProjectModal();
      }
      closeMobileMenu();
    }
  });

  // Initialize on DOM ready
  document.addEventListener('DOMContentLoaded', () => {
    renderWorks();
  });
})();
