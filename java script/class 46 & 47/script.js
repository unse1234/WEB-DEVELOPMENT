/* ── Data ── */
const storiesData = [
  {
    avatar: 'https://randomuser.me/api/portraits/women/1.jpg',
    name: 'Your Story',
    story: null,       // null = no story yet
    isOwn: true        // flag to identify your story
  },
  {
    avatar: 'https://randomuser.me/api/portraits/men/2.jpg',
    name: 'Aisha',
    story: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80'
  },
  {
    avatar: 'https://randomuser.me/api/portraits/women/3.jpg',
    name: 'Bilal',
    story: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=600&q=80'
  },
  {
    avatar: 'https://randomuser.me/api/portraits/men/4.jpg',
    name: 'Sara',
    story: 'https://images.unsplash.com/photo-1502003148287-a82ef80a6abc?w=600&q=80'
  },
  {
    avatar: 'https://randomuser.me/api/portraits/women/5.jpg',
    name: 'Usman',
    story: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=80'
  },
];

const DURATION = 5000;

/* ── Build thumbnails ── */
const storiesRow = document.getElementById('storiesRow');

storiesData.forEach(function(user, index) {

  const story    = document.createElement('div');
  story.className = 'story';

  const avatar   = document.createElement('div');
  avatar.className = 'avatar';

  const img      = document.createElement('img');
  img.src = user.avatar;
  img.alt = user.name;

  const username = document.createElement('span');
  username.className = 'username';
  username.textContent = user.name;

  // ── "Your Story" gets special look ──
  if (user.isOwn) {
    avatar.classList.add('add-story-ring');   // dashed border, dimmed

    const plus = document.createElement('div');
    plus.className = 'plus-icon';
    plus.textContent = '+';
    avatar.appendChild(plus);                 // blue + badge on avatar
  }

  avatar.appendChild(img);
  story.appendChild(avatar);
  story.appendChild(username);

  // ── Click behavior ──
  story.addEventListener('click', function() {
    if (user.isOwn) {
      // No story yet → show add modal
      if (!user.story) {
        showAddModal();
      } else {
        // Has a story → open it normally
        openViewer(index);
      }
    } else {
      openViewer(index);
    }
  });

  storiesRow.appendChild(story);
});


/* ══════════════════════════════
   ADD STORY MODAL
══════════════════════════════ */

// Build modal dynamically
const addModal = document.createElement('div');
addModal.className = 'add-modal';
addModal.id = 'addModal';
addModal.innerHTML = `
  <button class="add-modal-close" id="addModalClose">✕</button>
  <div style="font-size: 52px;">📸</div>
  <h2>Create Your Story</h2>
  <p>Share a photo with your friends. It will disappear after viewing.</p>
  <button class="upload-btn" id="uploadBtn">
    <span class="upload-icon">⬆</span> Choose from PC
  </button>
`;
document.body.appendChild(addModal);

function showAddModal() {
  addModal.classList.add('active');
}
function hideAddModal() {
  addModal.classList.remove('active');
}

document.getElementById('addModalClose').addEventListener('click', hideAddModal);

// Upload button triggers hidden file input
document.getElementById('uploadBtn').addEventListener('click', function() {
  document.getElementById('fileInput').click();
});

// When user picks a file
document.getElementById('fileInput').addEventListener('change', function(e) {
  const file = e.target.files[0];
  if (!file) return;

  // Convert file to a local URL so we can use it as image src
  const localURL = URL.createObjectURL(file);

  // Save the story into the data
  storiesData[0].story = localURL;

  // Update the thumbnail avatar: remove dashed ring, show normal gradient ring
  const firstAvatar = document.querySelectorAll('.avatar')[0];
  firstAvatar.classList.remove('add-story-ring');

  // Update the avatar image to show a preview of the uploaded photo
  firstAvatar.querySelector('img').src = localURL;

  // Remove the + badge
  const plus = firstAvatar.querySelector('.plus-icon');
  if (plus) plus.remove();

  hideAddModal();

  // Automatically open the story right after upload
  openViewer(0);

  // Reset file input so same file can be re-selected later
  e.target.value = '';
});


/* ══════════════════════════════
   VIEWER LOGIC (unchanged)
══════════════════════════════ */
const viewer       = document.getElementById('viewer');
const progressBars = document.getElementById('progressBars');
const viewerAvatar = document.getElementById('viewerAvatar');
const viewerName   = document.getElementById('viewerName');
const viewerImg    = document.getElementById('viewerImg');
const viewerClose  = document.getElementById('viewerClose');
const tapLeft      = document.getElementById('tapLeft');
const tapRight     = document.getElementById('tapRight');
const pauseBadge   = document.getElementById('pauseBadge');
const heartBtn     = document.getElementById('heartBtn');

let currentIndex = 0;
let timer        = null;
let startTime    = null;
let elapsed      = 0;
let isPaused     = false;
let holdTimer    = null;

function openViewer(index) {
  // Skip if story is null (no story added yet)
  if (!storiesData[index].story) return;

  currentIndex = index;

  progressBars.innerHTML = '';
  storiesData.forEach(function(user, i) {
    // Skip users with no story in progress bars
    if (!user.story) return;

    const bar  = document.createElement('div');
    bar.className = 'bar';
    bar.id = 'bar' + i;

    const fill = document.createElement('div');
    fill.className = 'bar-fill';
    fill.id = 'fill' + i;

    if (i < index) bar.classList.add('done');

    bar.appendChild(fill);
    progressBars.appendChild(bar);
  });

  loadStory(currentIndex);
  viewer.classList.add('active');
}

function loadStory(index) {
  // If no story at this index, skip to next
  if (!storiesData[index] || !storiesData[index].story) {
    closeViewer();
    return;
  }

  const user = storiesData[index];
  viewerAvatar.src       = user.avatar;
  viewerName.textContent = user.name;
  viewerImg.src          = user.story;
  heartBtn.textContent   = '🤍';

  storiesData.forEach(function(_, i) {
    const bar  = document.getElementById('bar'  + i);
    const fill = document.getElementById('fill' + i);
    if (!bar || !fill) return;
    if (i < index) {
      bar.classList.add('done');
      fill.style.transition = 'none';
      fill.style.width = '100%';
    } else {
      bar.classList.remove('done');
      fill.style.transition = 'none';
      fill.style.width = '0%';
    }
  });

  startProgress();
}

function startProgress() {
  clearTimer();
  isPaused  = false;
  elapsed   = 0;
  startTime = Date.now();
  pauseBadge.classList.remove('show');

  const fill = document.getElementById('fill' + currentIndex);
  if (fill) {
    requestAnimationFrame(function() {
      fill.style.transition = 'width ' + DURATION + 'ms linear';
      fill.style.width = '100%';
    });
  }

  timer = setTimeout(goNext, DURATION);
}

function goNext() {
  clearTimer();
  const bar = document.getElementById('bar' + currentIndex);
  if (bar) bar.classList.add('done');

  // Find next index that has a story
  let next = currentIndex + 1;
  while (next < storiesData.length && !storiesData[next].story) {
    next++;
  }

  if (next >= storiesData.length) {
    closeViewer();
    return;
  }

  currentIndex = next;
  loadStory(currentIndex);
}

function goPrev() {
  clearTimer();
  const fill = document.getElementById('fill' + currentIndex);
  const bar  = document.getElementById('bar'  + currentIndex);
  if (fill) { fill.style.transition = 'none'; fill.style.width = '0%'; }
  if (bar)  { bar.classList.remove('done'); }

  // Find previous index that has a story
  let prev = currentIndex - 1;
  while (prev >= 0 && !storiesData[prev].story) {
    prev--;
  }

  if (prev < 0) prev = currentIndex;  // stay on current if no prev

  const prevFill = document.getElementById('fill' + prev);
  const prevBar  = document.getElementById('bar'  + prev);
  if (prevFill) { prevFill.style.transition = 'none'; prevFill.style.width = '0%'; }
  if (prevBar)  { prevBar.classList.remove('done'); }

  currentIndex = prev;
  loadStory(currentIndex);
}

function closeViewer() {
  clearTimer();
  viewer.classList.remove('active');
  const thumbs = document.querySelectorAll('.avatar');
  if (thumbs[currentIndex]) thumbs[currentIndex].classList.add('seen');
}

function pauseStory() {
  if (isPaused) return;
  isPaused = true;
  clearTimer();
  elapsed = Date.now() - startTime;

  const fill = document.getElementById('fill' + currentIndex);
  if (fill) {
    const pct = (elapsed / DURATION) * 100;
    fill.style.transition = 'none';
    fill.style.width = pct + '%';
  }
  pauseBadge.classList.add('show');
}

function resumeStory() {
  clearTimeout(holdTimer);
  if (!isPaused) return;
  isPaused = false;
  pauseBadge.classList.remove('show');

  const remaining = DURATION - elapsed;
  startTime = Date.now() - elapsed;

  const fill = document.getElementById('fill' + currentIndex);
  if (fill) {
    fill.style.transition = 'width ' + remaining + 'ms linear';
    fill.style.width = '100%';
  }
  timer = setTimeout(goNext, remaining);
}

function clearTimer() {
  if (timer) { clearTimeout(timer); timer = null; }
}

tapRight.addEventListener('click', goNext);
tapLeft.addEventListener('click',  goPrev);
viewerClose.addEventListener('click', closeViewer);

viewer.addEventListener('mousedown',  function() { holdTimer = setTimeout(pauseStory, 150); });
viewer.addEventListener('mouseup',    resumeStory);
viewer.addEventListener('touchstart', function() { holdTimer = setTimeout(pauseStory, 150); }, { passive: true });
viewer.addEventListener('touchend',   resumeStory);

heartBtn.addEventListener('click', function() {
  heartBtn.textContent = heartBtn.textContent === '🤍' ? '❤️' : '🤍';
});

document.addEventListener('keydown', function(e) {
  if (!viewer.classList.contains('active')) return;
  if (e.key === 'ArrowRight') goNext();
  if (e.key === 'ArrowLeft')  goPrev();
  if (e.key === 'Escape')     closeViewer();
});
```

// **What happens step by step:**
// ```
// Click "Your Story" (no story yet)
//         ↓
// showAddModal() → modal appears with upload button
//         ↓
// Click "Choose from PC" → triggers hidden <input type="file">
//         ↓
// User picks image from their PC
//         ↓
// URL.createObjectURL(file) → creates local URL for the image
//         ↓
// storiesData[0].story = localURL  → saves it to data
//         ↓
// Avatar updates to show the photo preview
// + badge disappears, dashed ring becomes gradient
//         ↓
// openViewer(0) → story opens immediately