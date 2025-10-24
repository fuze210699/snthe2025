// Global variables
let currentScreen = "welcome";
let birthdayMusic;
let isMobile = window.innerWidth <= 768;

// Letter data for 12 months
const letterData = [
  {
    month: "Tháng 8/2025",
    date: "25/08/2025",
    title: "Khởi Đầu Mới",
    preview: "Chúc mừng sinh nhật! Một năm mới đầy ước mơ...",
    content: `
            <h1>🎂 Sinh Nhật Đặc Biệt</h1>
            <p>Hey bạn,</p>
            <p>Hôm nay là ngày sinh nhật của bạn đó - ngày 25/08/2025. Tui muốn là người đầu tiên chúc bạn sinh nhật vui vẻ!</p>
            <p>Chúc bạn luôn khỏe mạnh, hạnh phúc và thành công trong mọi điều bạn làm. Mong rằng tuổi mới sẽ mang đến cho bạn nhiều niềm vui và những trải nghiệm tuyệt vời.</p>
            <p>Cảm ơn bạn vì đã xuất hiện trong cuộc sống của tui. Hy vọng chúng ta sẽ có nhiều kỷ niệm đẹp cùng nhau!</p>
            <p>Dẫu biết thời gian qua có nhiều chuyện hông dui với nhau, nhưng bạn luôn là người lắng nghe và thấu hiểu tui.</p>
            <p>Từ đó tui đã rút ra nhiều bài học cho riêng mình, và tui rất trân trọng điều đó.</p>
            <p>Hy vọng rằng chúng ta sẽ cùng nhau vượt qua mọi thử thách trong tương lai.</p>
            <p>Chúc mừng tủi 26, chúc mừng sinh nhật</p>
            <p>Với tình cảm đặc biệt,</p>
            <p>💖 Người luôn quan tâm đến bạn</p>
        `,
    isUnlocked: true,
  },
  {
    month: "Tháng 9/2025",
    date: "25/09/2025",
    title: "Chớm",
    preview: "Mọi yêu thương đều chớm nở từ những điều nhỏ nhất...",
    content: `
            <h1>🍂 Mùa Thu - Mùa Yêu</h1>
            <p>Gửi "Em ❤️️",</p>
            <p>Tháng 9 thật nhiều sự việc xảy ra, nhỉ?</p>
            <p>Tui có 1 chuyến đi Hà Nội đáng nhớ, nhiều kỷ niệm và mở mang nhiều thứ.</p>
            <p>Bạn cũng có 1 kì lễ, chắc là cũng vui vẻ bên gia đình mà phải không?</p>
            <p>Rùi tui hì hục hẹn được bạn ra xem phim nè, ai mà dè bạn bị tai nạn... Phải kể lại là lúc đó tui cũng hoảng nhưng phải giữ bình tĩnh, biết sao sau khi bạn gọi tui lại ra khá muộn không ? Tui hỏng biết chỗ bạn nói ở đâu vì nghe không rõ, xong tui chạy đi hỏi bảo vệ người ta mới chỉ cho, xong hì hục cái thân 7x kí chạy ra...</p>
            <p>May qua bạn không bị quá nặng, chân tay còn đủ còn tỉnh táo, không biết bạn có đế ý không chị kia gọi tui với bạn là vợ chồng, ừ nhỉ, giống mà😊</p>
            <p>Lần đầu tiên sau rất nhiều năm, tui được chạm vào bạn, được là người đẩy xe lăn cho bạn, dù không muốn nhưng cảm giác đó tui như kiểu là 1 phần trong cuộc đời bạn ấy...</p>
            <img src="./IMG_1775.jpg" width="300" height="300" />
            <p>Sau này hãy cho tôi cơ hội được tham gia vào cuộc đời bạn nhiều hơn nhé</p>
            <p>Tháng 9, chuyện vui chuyện buồn đều có cả, chỉ mong rằng 2 người khi có xung đột hãy hạ cái tôi xuống, ngồi lại lắng nghe nhau, cùng nhau xây dựng niềm tin vào đối phương</p>
            <p>Dạo đây tui cảm nhận được là bạn quan tâm tui hơn, hông phải trước đó không có mà giờ nó lộ ra hơn, bạn cởi mở hơn, chịu nói hơn, tui vui lắm, kiểu có động lực hơn ấy, cứ tiếp tục thế nhé, trạm sạc cảm xúc của riêng tui</p>
            <p>Mọi khởi đầu đều bắt đầu từ những điều nhỏ nhất, cố gắng nha</p>
            <p>Cùng chào đón tháng 10 thật bùng nổ thui nào💓</p>
        `,
    isUnlocked: true,
  },
  {
    month: "Tháng 10/2025",
    date: "25/10/2025",
    title: "Sóng Gió & Khởi Đầu",
    preview: "Sau cơn bão, lòng vẫn còn tay nắm chặt tay...",
    content: `
            <h1>Chào "Em ❤️️"</h1>
            <p><em>"Hạnh phúc không phải là không có sóng gió, mà là sau mỗi cơn bão lòng vẫn còn tay nắm chặt tay."</em></p>
            <br>
            <p>Tụi mình đã cùng nhau đi qua một tháng đầy sóng gió, những thử thách đến cùng cực, đến mức tui đã thực sự nghĩ rằng có thể mất bạn. Thế nhưng, điều kì diệu là vẫn có một thứ gì đó giữ chúng ta lại và kết nối chúng ta chặt chẽ hơn. Tui tin rằng đó chính là sự chứng giám của ông bà dành cho tình cảm chân thành của cả hai đứa mình.</p>
            <p>Tui đã học được những bài học của riêng mình, và bạn cũng vậy. Tui biết mình có con đường phải đi, và như bạn nói, lớn rồi thì phải tự chịu trách nhiệm: nếu chọn đúng thì chúng ta sẽ có nhau, nếu không thì chấp nhận đó là định mệnh.</p>
            <p>Tui nghĩ rằng tui cũng đã tìm lại được sự cân bằng cho chính bản thân mình. "Cậu bé" trong tui đang dần ổn định và trưởng thành hơn. Tui tin đây là con đường đúng đắn nhất, vì tui cần phải vững vàng thì mới có thể chăm sóc cho "cô bé" đang tổn thương trong bạn.</p>
            <p>Một tháng đáng nhớ, không chỉ vì những kỉ niệm không vui, mà còn vì nó đã mở ra một khởi đầu mà tui thấy khả quan và sáng lạng hơn rất nhiều.</p>
            <p>Hiện tại, tui đang rất hài lòng với con đường mình đã chọn – con đường phát triển bản thân. Và thật may mắn làm sao, con đường đó lại có bóng dáng bạn ở trong đó.</p>
            <p>Hãy cùng nhau tiếp tục cố gắng để hoàn thiện mình nhé, vì bản thân mình và vì hạnh phúc của cả hai đứa mình.</p>
            <br>
            <p>Thương bạn nhiều.</p>
        `,
    isUnlocked: true,
  },
  {
    month: "Tháng 11/2025",
    date: "25/11/2025",
    title: "Lời Cảm Ơn",
    preview: "Cảm ơn bạn đã đến với cuộc đời...",
    content: `
            <h1>🦃 Thanksgiving</h1>
            <p>Bạn thân yêu,</p>
            <p>Trong tháng lời cảm ơn này, tui muốn cảm ơn bạn vì đã xuất hiện trong cuộc sống của tui. Từ ngày quen bạn, mọi thứ đều trở nên thú vị hơn.</p>
            <p>Cảm ơn bạn vì những cuộc trò chuyện đêm khuya, những nụ cười tươi và cả những khoảnh khắc bạn làm tim tui đập nhanh hơn.</p>
            <p>Bạn là món quà tuyệt vời mà cuộc sống mang đến. Tui thật sự biết ơn!</p>
            <p>Với lòng biết ơn sâu sắc,</p>
            <p>🙏 Người rất trân trọng bạn</p>
        `,
    isUnlocked: false,
  },
  {
    month: "Tháng 12/2025",
    date: "25/12/2025",
    title: "Giáng Sinh Ấm Áp",
    preview: "Merry Christmas! Một mùa Giáng sinh ấm áp...",
    content: `
            <h1>🎄 Merry Christmas</h1>
            <p>Ho ho ho! 🎅</p>
            <p>Giáng sinh đến rồi! Tui đã chuẩn bị một món quà nhỏ cho bạn đó. Hy vọng bạn sẽ thích nó!</p>
            <p>Chúc bạn có một mùa Giáng sinh thật ấm áp bên gia đình. Và nếu có thời gian, tui mong được cùng bạn ngắm những ánh đèn Giáng sinh lung linh trên phố.</p>
            <p>Merry Christmas, người đặc biệt! 🎁</p>
            <p>P.S: Tui hy vọng ông già Noel sẽ thực hiện ước nguyện bí mật của tui... 😉</p>
        `,
    isUnlocked: false,
  },
  {
    month: "Tháng 1/2026",
    date: "25/01/2026",
    title: "Năm Mới Tươi Sáng",
    preview: "Happy New Year! Khởi đầu mới...",
    content: `
            <h1>🎊 Happy New Year 2026</h1>
            <p>Chúc mừng năm mới 2026!</p>
            <p>Một năm mới đã bắt đầu, và tui có một resolution đặc biệt... đó là dành nhiều thời gian hơn bên bạn!</p>
            <p>Chúc bạn năm mới an khang thịnh vượng, mọi ước mơ đều thành hiện thực. Và tui hy vọng trong năm này, chúng ta sẽ trở nên gần gũi hơn nữa.</p>
            <p>2026 sẽ là năm tuyệt vời, đặc biệt là khi có bạn bên cạnh! ✨</p>
        `,
    isUnlocked: false,
  },
  {
    month: "Tháng 2/2026",
    date: "25/02/2026",
    title: "Tình Yêu Ngọt Ngào",
    preview: "Valentine's Day - Ngày của tình yêu...",
    content: `
            <h1>💕 Valentine's Day</h1>
            <p>Hey bạn,</p>
            <p>Valentine's Day đến rồi... Tui có điều muốn nói với bạn từ lâu lắm rồi.</p>
            <p>Bạn có biết rằng từ ngày quen bạn, tui đã cảm thấy có gì đó đặc biệt không? Có lẽ... có lẽ tui đã thích bạn từ lúc nào rồi.</p>
            <p>Tui không biết bạn có cảm thấy gì với tui không, nhưng tui muốn thử tìm hiểu thêm về nhau. Bạn có muốn cho tui một cơ hội không?</p>
            <p>Dù bạn trả lời thế nào, tui cũng sẽ luôn trân trọng tình bạn của chúng ta.</p>
            <p>Với tình cảm chân thành,</p>
            <p>💖 Người thầm thích bạn</p>
        `,
    isUnlocked: false,
  },
  {
    month: "Tháng 3/2026",
    date: "25/03/2026",
    title: "Mùa Xuân Tươi Mới",
    preview: "Mùa xuân về, hoa nở rộ...",
    content: `
            <h1>🌸 Mùa Xuân Tươi Đẹp</h1>
            <p>Bạn như mùa xuân,</p>
            <p>Hoa anh đào nở rộ, báo hiệu mùa xuân đã về. Nhìn những bông hoa ấy, tui lại nghĩ đến bạn - tươi đẹp và tỏa sáng.</p>
            <p>Tui muốn mời bạn cùng đi ngắm hoa sakura cuối tuần này. Chúng ta có thể pic-nic dưới tán hoa, nói chuyện và tận hưởng không khí mùa xuân.</p>
            <p>Bạn nghĩ sao? Spring date with me? 🌺</p>
        `,
    isUnlocked: false,
  },
  {
    month: "Tháng 4/2026",
    date: "25/04/2026",
    title: "Tháng Tư Rạng Rỡ",
    preview: "April showers bring May flowers...",
    content: `
            <h1>🌷 Tháng Tư Đẹp Trời</h1>
            <p>Bạn yêu dấu,</p>
            <p>Tháng 4 với những cơn mưa nhẹ và nắng ấm. Tui thích đi dạo trong mưa phùn cùng bạn - có gì đó rất lãng mạn.</p>
            <p>Bạn có biết rằng mỗi lần gặp bạn, tui đều cảm thấy như được sạc đầy năng lượng không? Nụ cười của bạn như ánh nắng trong những ngày mưa vậy.</p>
            <p>Hy vọng tháng 4 này sẽ mang đến cho chúng ta nhiều kỷ niệm đẹp!</p>
        `,
    isUnlocked: false,
  },
  {
    month: "Tháng 5/2026",
    date: "25/05/2026",
    title: "Mùa Hè Sắp Đến",
    preview: "Chuẩn bị cho mùa hè tuyệt vời...",
    content: `
            <h1>☀️ Mùa Hè Sắp Đến</h1>
            <p>Summer vibes! 🏖️</p>
            <p>Mùa hè sắp đến rồi! Tui đã lên kế hoạch cho kỳ nghỉ hè - du lịch, tắm biển, cafe hopping... Bạn có muốn cùng tui tạo ra những kỷ niệm đẹp không?</p>
            <p>Tui nghĩ sẽ rất vui nếu có bạn bên cạnh trong những chuyến phiêu lưu mùa hè này!</p>
            <p>Adventure awaits! Bạn sẵn sàng chưa? 🌊</p>
        `,
    isUnlocked: false,
  },
  {
    month: "Tháng 6/2026",
    date: "25/06/2026",
    title: "Mùa Hè Rực Rỡ",
    preview: "Những ngày hè tuyệt vời nhất...",
    content: `
            <h1>🌞 Mùa Hè Rực Rỡ</h1>
            <p>My sunshine! ☀️</p>
            <p>Mùa hè chính thức bắt đầu! Và tui muốn dành mỗi ngày nắng đẹp cùng bạn. Beach date, ice cream date, sunset watching... có vẻ như list của tui dài quá!</p>
            <p>Bạn có biết rằng nụ cười của bạn sáng hơn cả ánh mặt trời mùa hè không? (Cheesy quá nhỉ? Nhưng mà đúng mà! 😄)</p>
            <p>Hãy cùng nhau tận hưởng những ngày hè tuyệt vời này nhé! 🏄‍♀️</p>
        `,
    isUnlocked: false,
  },
  {
    month: "Tháng 7/2026",
    date: "25/07/2026",
    title: "Kỷ Niệm Một Năm",
    preview: "Gần một năm đã trôi qua...",
    content: `
            <h1>🎯 Gần Đến Sinh Nhật</h1>
            <p>Countdown begins! ⏰</p>
            <p>Còn đúng một tháng nữa là đến sinh nhật bạn rồi! Một năm đã trôi qua kể từ ngày tui bắt đầu thích bạn...</p>
            <p>Trong một năm qua, bạn đã thay đổi cuộc sống của tui rất nhiều. Tui trở nên hạnh phúc hơn, tích cực hơn, và quan trọng nhất là... tui đã biết yêu thương là gì.</p>
            <p>Hãy chuẩn bị tinh thần cho một sinh nhật thật đặc biệt nhé! Tui đã có một surprise lớn dành cho bạn đó! 🎂</p>
        `,
    isUnlocked: false,
  },
];

// Initialize page
document.addEventListener("DOMContentLoaded", function () {
  console.log("Page loaded, initializing...");

  // Initialize audio but DO NOT play it
  birthdayMusic = document.getElementById("birthdayMusic");
  if (birthdayMusic) {
    // Set volume
    birthdayMusic.volume = 0.3;
    console.log("Birthday music initialized (paused)");
    // DO NOT autoplay - music will be started by clock.js when reaching 05:00:00
  }

  initializeMobileOptimizations();
  generateLettersGrid();
});

// Play music on first user interaction (backup method)
function playMusicOnFirstClick() {
  if (birthdayMusic && birthdayMusic.paused) {
    birthdayMusic.play().catch((error) => {
      console.log("Failed to play music:", error);
    });
  }
}

// Mobile optimizations
function initializeMobileOptimizations() {
  isMobile = window.innerWidth <= 768;

  if (isMobile) {
    document.body.classList.add("mobile-device");
  }
}

// Main celebration function
function startCelebration() {
  console.log("Starting celebration...");

  // Add button press feedback
  const startBtn = document.querySelector(".start-btn");
  if (startBtn) {
    startBtn.style.transform = "translateY(-1px) scale(0.98)";
    startBtn.style.transition = "all 0.1s ease";
  }

  // Ensure music is playing
  if (birthdayMusic) {
    birthdayMusic.play().catch((error) => {
      console.log("Music play failed:", error);
    });
  }

  // Smooth transition with better timing
  const welcomeScreen = document.getElementById("welcomeScreen");
  const animationScreen = document.getElementById("animationScreen");

  if (welcomeScreen && animationScreen) {
    // Pre-setup animation screen to prevent flicker
    animationScreen.style.display = "flex";
    animationScreen.style.opacity = "0";
    animationScreen.style.transform = "translateY(30px) scale(0.95)";
    animationScreen.style.filter = "blur(5px)";
    animationScreen.style.transition =
      "all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)";

    // Reset all animations before starting
    resetAnimationElements();

    // Fade out welcome screen
    welcomeScreen.style.transition =
      "all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)";
    welcomeScreen.style.transform = "translateY(-30px) scale(0.95)";
    welcomeScreen.style.opacity = "0";
    welcomeScreen.style.filter = "blur(5px)";

    setTimeout(() => {
      welcomeScreen.style.display = "none";

      // Force reflow
      animationScreen.offsetHeight;

      // Smooth fade in animation screen
      animationScreen.style.opacity = "1";
      animationScreen.style.transform = "translateY(0) scale(1)";
      animationScreen.style.filter = "blur(0px)";

      // Start enhanced birthday sequence
      startEnhancedBirthdaySequence();

      // Show menu after longer animation
      setTimeout(() => {
        showMenu();
      }, 12000);
    }, 600);
  }

  currentScreen = "animation";
}

// Reset all animation elements to initial state
function resetAnimationElements() {
  const dateElements = document.querySelectorAll(".date-part");
  const titleElement = document.querySelector(".animated-title");
  const subtitleElement = document.querySelector(".animated-subtitle");

  // Reset date elements
  dateElements.forEach((el) => {
    el.style.animation = "none";
    el.style.transform = "";
    el.style.opacity = "";
  });

  // Reset title elements
  if (titleElement) {
    titleElement.style.animation = "none";
    titleElement.style.transform = "";
    titleElement.style.opacity = "";
  }

  if (subtitleElement) {
    subtitleElement.style.animation = "none";
    subtitleElement.style.transform = "";
    subtitleElement.style.opacity = "";
  }
}

// Enhanced birthday animation sequence
function startEnhancedBirthdaySequence() {
  // Phase 1: Date explosion with stagger (0-3s)
  setTimeout(() => {
    triggerDateExplosion();
  }, 500);

  // Phase 2: First confetti burst (2s)
  setTimeout(() => {
    createConfetti();
  }, 2000);

  // Phase 3: Birthday text animation (3-5s)
  setTimeout(() => {
    triggerBirthdayText();
  }, 3000);

  // Phase 4: Fireworks effect (4-6s)
  setTimeout(() => {
    createFireworks();
  }, 4000);

  // Phase 5: Cake animation (6-8s)
  setTimeout(() => {
    createFloatingCake();
  }, 6000);

  // Phase 6: Heart rain (7-9s)
  setTimeout(() => {
    createHeartRain();
  }, 7000);

  // Phase 7: Final confetti explosion (9-11s)
  setTimeout(() => {
    createMegaConfetti();
  }, 9000);

  // Phase 8: Sparkles finale (10-12s)
  setTimeout(() => {
    createSparklesFinale();
  }, 10000);
}

// Trigger date explosion with enhanced effects
function triggerDateExplosion() {
  const dateElements = document.querySelectorAll(".date-part");
  dateElements.forEach((el, index) => {
    el.style.animation = "none";
    setTimeout(() => {
      el.style.animation = `enhanced-explode 2s ease-out ${index * 0.4}s both`;
    }, 100);
  });
}

// Trigger birthday text with wave effect
function triggerBirthdayText() {
  const titleElement = document.querySelector(".animated-title");
  const subtitleElement = document.querySelector(".animated-subtitle");

  if (titleElement) {
    titleElement.style.animation = "none";
    setTimeout(() => {
      titleElement.style.animation = "wave-bounce-in 2s ease-out both";
    }, 100);
  }

  if (subtitleElement) {
    subtitleElement.style.animation = "none";
    setTimeout(() => {
      subtitleElement.style.animation =
        "rainbow-fade-in 1.5s ease-out 0.5s both";
    }, 100);
  }
}

// Create fireworks effect
function createFireworks() {
  const colors = [
    "#ff6b9d",
    "#4ecdc4",
    "#45b7d1",
    "#96c93f",
    "#ffd700",
    "#ff4757",
    "#3742fa",
  ];

  for (let i = 0; i < 8; i++) {
    setTimeout(() => {
      createFirework(colors);
    }, i * 300);
  }
}

function createFirework(colors) {
  const centerX = Math.random() * window.innerWidth;
  const centerY =
    Math.random() * (window.innerHeight * 0.6) + window.innerHeight * 0.2;

  // Create explosion center
  for (let i = 0; i < 12; i++) {
    const particle = document.createElement("div");
    particle.style.position = "fixed";
    particle.style.left = centerX + "px";
    particle.style.top = centerY + "px";
    particle.style.width = "6px";
    particle.style.height = "6px";
    particle.style.backgroundColor =
      colors[Math.floor(Math.random() * colors.length)];
    particle.style.borderRadius = "50%";
    particle.style.zIndex = "1000";
    particle.style.pointerEvents = "none";

    const angle = (i / 12) * Math.PI * 2;
    const distance = 100 + Math.random() * 50;
    const endX = centerX + Math.cos(angle) * distance;
    const endY = centerY + Math.sin(angle) * distance;

    particle.style.animation = `firework-burst 1.5s ease-out forwards`;
    particle.style.setProperty("--end-x", endX + "px");
    particle.style.setProperty("--end-y", endY + "px");

    document.body.appendChild(particle);

    setTimeout(() => {
      if (particle.parentNode) {
        particle.parentNode.removeChild(particle);
      }
    }, 1500);
  }
}

// Create floating cake animation
function createFloatingCake() {
  const cake = document.createElement("div");
  cake.innerHTML = "🎂";
  cake.style.position = "fixed";
  cake.style.left = "-100px";
  cake.style.top = "50%";
  cake.style.fontSize = "4rem";
  cake.style.zIndex = "1000";
  cake.style.pointerEvents = "none";
  cake.style.animation = "cake-float 3s ease-in-out forwards";

  document.body.appendChild(cake);

  setTimeout(() => {
    if (cake.parentNode) {
      cake.parentNode.removeChild(cake);
    }
  }, 3000);
}

// Create heart rain
function createHeartRain() {
  const hearts = ["💖", "💝", "💕", "💗", "💘", "💞", "💓"];

  for (let i = 0; i < 20; i++) {
    setTimeout(() => {
      createHeartDrop(hearts);
    }, i * 150);
  }
}

function createHeartDrop(hearts) {
  const heart = document.createElement("div");
  heart.innerHTML = hearts[Math.floor(Math.random() * hearts.length)];
  heart.style.position = "fixed";
  heart.style.left = Math.random() * 100 + "%";
  heart.style.top = "-50px";
  heart.style.fontSize = 1.5 + Math.random() * 1.5 + "rem";
  heart.style.zIndex = "1000";
  heart.style.pointerEvents = "none";
  heart.style.animation = `heart-fall ${
    2 + Math.random() * 2
  }s linear forwards`;

  document.body.appendChild(heart);

  setTimeout(() => {
    if (heart.parentNode) {
      heart.parentNode.removeChild(heart);
    }
  }, 4000);
}

// Create mega confetti explosion
function createMegaConfetti() {
  const colors = [
    "#ff6b9d",
    "#4ecdc4",
    "#45b7d1",
    "#96c93f",
    "#ffd700",
    "#ff4757",
    "#3742fa",
    "#ff9ff3",
    "#54a0ff",
  ];
  const confettiCount = isMobile ? 50 : 100;

  for (let i = 0; i < confettiCount; i++) {
    setTimeout(() => {
      createEnhancedConfettiPiece(colors);
    }, i * 50);
  }
}

function createEnhancedConfettiPiece(colors) {
  const confetti = document.createElement("div");
  confetti.style.position = "fixed";
  confetti.style.left = Math.random() * 100 + "%";
  confetti.style.top = "-20px";
  confetti.style.width = 6 + Math.random() * 8 + "px";
  confetti.style.height = 6 + Math.random() * 8 + "px";
  confetti.style.backgroundColor =
    colors[Math.floor(Math.random() * colors.length)];
  confetti.style.borderRadius = Math.random() > 0.5 ? "50%" : "0";
  confetti.style.zIndex = "1000";
  confetti.style.pointerEvents = "none";
  confetti.style.animation = `enhanced-confetti-fall ${
    2 + Math.random() * 2
  }s linear forwards`;

  document.body.appendChild(confetti);

  setTimeout(() => {
    if (confetti.parentNode) {
      confetti.parentNode.removeChild(confetti);
    }
  }, 4000);
}

// Create sparkles finale
function createSparklesFinale() {
  for (let i = 0; i < 30; i++) {
    setTimeout(() => {
      createSparkle();
    }, i * 100);
  }
}

function createSparkle() {
  const sparkle = document.createElement("div");
  sparkle.innerHTML = "✨";
  sparkle.style.position = "fixed";
  sparkle.style.left = Math.random() * 100 + "%";
  sparkle.style.top = Math.random() * 100 + "%";
  sparkle.style.fontSize = 1 + Math.random() * 2 + "rem";
  sparkle.style.zIndex = "1000";
  sparkle.style.pointerEvents = "none";
  sparkle.style.animation = "sparkle-twinkle 2s ease-in-out forwards";

  document.body.appendChild(sparkle);

  setTimeout(() => {
    if (sparkle.parentNode) {
      sparkle.parentNode.removeChild(sparkle);
    }
  }, 2000);
}

// Create confetti effect
function createConfetti() {
  const colors = ["#ff6b9d", "#4ecdc4", "#45b7d1", "#96c93f", "#ffd700"];
  const confettiCount = isMobile ? 30 : 50;

  for (let i = 0; i < confettiCount; i++) {
    setTimeout(() => {
      createConfettiPiece(colors);
    }, i * 100);
  }
}

function createConfettiPiece(colors) {
  const confetti = document.createElement("div");
  confetti.style.position = "fixed";
  confetti.style.left = Math.random() * 100 + "%";
  confetti.style.top = "-10px";
  confetti.style.width = "8px";
  confetti.style.height = "8px";
  confetti.style.backgroundColor =
    colors[Math.floor(Math.random() * colors.length)];
  confetti.style.zIndex = "1000";
  confetti.style.pointerEvents = "none";
  confetti.style.borderRadius = "50%";

  // Animation
  confetti.style.animation = "confetti-fall 3s linear forwards";

  document.body.appendChild(confetti);

  // Remove after animation
  setTimeout(() => {
    if (confetti.parentNode) {
      confetti.parentNode.removeChild(confetti);
    }
  }, 3000);
}

// Show menu screen
function showMenu() {
  const animationScreen = document.getElementById("animationScreen");
  const menuScreen = document.getElementById("menuScreen");

  if (animationScreen && menuScreen) {
    // Smooth transition out of animation
    animationScreen.style.transition =
      "all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)";
    animationScreen.style.transform = "translateY(-30px) scale(0.95)";
    animationScreen.style.opacity = "0";
    animationScreen.style.filter = "blur(5px)";

    setTimeout(() => {
      animationScreen.style.display = "none";

      // Pre-setup menu screen
      menuScreen.style.display = "flex";
      menuScreen.style.opacity = "0";
      menuScreen.style.transform = "translateY(30px) scale(0.95)";
      menuScreen.style.filter = "blur(5px)";
      menuScreen.style.transition =
        "all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)";

      // Force reflow
      menuScreen.offsetHeight;

      // Smooth transition in
      menuScreen.style.opacity = "1";
      menuScreen.style.transform = "translateY(0) scale(1)";
      menuScreen.style.filter = "blur(0px)";
    }, 600);
  }

  currentScreen = "menu";
}

// Replay animation
function replayAnimation() {
  const menuScreen = document.getElementById("menuScreen");
  const animationScreen = document.getElementById("animationScreen");

  if (menuScreen && animationScreen) {
    // Smooth transition out of menu
    menuScreen.style.transition =
      "all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)";
    menuScreen.style.transform = "translateY(-30px) scale(0.95)";
    menuScreen.style.opacity = "0";
    menuScreen.style.filter = "blur(5px)";

    setTimeout(() => {
      menuScreen.style.display = "none";

      // Pre-setup animation screen
      animationScreen.style.display = "flex";
      animationScreen.style.opacity = "0";
      animationScreen.style.transform = "translateY(30px) scale(0.95)";
      animationScreen.style.filter = "blur(5px)";
      animationScreen.style.transition =
        "all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)";

      // Reset all animations
      resetAnimationElements();

      // Force reflow
      animationScreen.offsetHeight;

      // Smooth fade in
      animationScreen.style.opacity = "1";
      animationScreen.style.transform = "translateY(0) scale(1)";
      animationScreen.style.filter = "blur(0px)";

      // Start enhanced birthday sequence (same as original)
      startEnhancedBirthdaySequence();

      // Return to menu after animation
      setTimeout(() => {
        showMenu();
      }, 12000);
    }, 600);
  }
}

// Show letters menu
function showLettersMenu() {
  const menuScreen = document.getElementById("menuScreen");
  const lettersScreen = document.getElementById("lettersScreen");

  if (menuScreen && lettersScreen) {
    menuScreen.style.animation = "fadeOut 0.5s ease forwards";

    setTimeout(() => {
      menuScreen.style.display = "none";
      lettersScreen.style.display = "block";
      lettersScreen.style.animation = "fadeIn 0.5s ease forwards";
    }, 500);
  }

  currentScreen = "letters";
}

// Show letters menu
function quickShowLettersMenu() {
  const welcomeScreen = document.getElementById("welcomeScreen");
  const lettersScreen = document.getElementById("lettersScreen");

  if (welcomeScreen && lettersScreen) {
    welcomeScreen.style.animation = "fadeOut 0.5s ease forwards";

    setTimeout(() => {
      welcomeScreen.style.display = "none";
      lettersScreen.style.display = "block";
      lettersScreen.style.animation = "fadeIn 0.5s ease forwards";
    }, 500);
  }

  currentScreen = "letters";
}

// Generate letters grid
function generateLettersGrid() {
  const lettersGrid = document.getElementById("lettersGrid");
  if (!lettersGrid) return;

  lettersGrid.innerHTML = "";

  letterData.forEach((letter, index) => {
    const letterItem = document.createElement("div");
    letterItem.className = `letter-item ${letter.isUnlocked ? "" : "locked"}`;
    letterItem.onclick = letter.isUnlocked ? () => openLetter(index) : null;

    if (letter.isUnlocked) {
      letterItem.innerHTML = `
                <div class="letter-month">${letter.month}</div>
                <div class="letter-date">${letter.date}</div>
                <div class="letter-preview">${letter.preview}</div>
            `;
    } else {
      letterItem.innerHTML = `
                <div class="lock-icon">🔒</div>
                <div class="letter-month">${letter.month}</div>
                <div class="letter-date">${letter.date}</div>
                <div class="letter-preview">Chưa đến thời gian...</div>
            `;
    }

    lettersGrid.appendChild(letterItem);
  });
}

// Open letter
function openLetter(index) {
  const letter = letterData[index];
  if (!letter.isUnlocked) return;

  const lettersScreen = document.getElementById("lettersScreen");
  const letterReading = document.getElementById("letterReading");
  const letterContent = document.getElementById("letterContent");

  if (lettersScreen && letterReading && letterContent) {
    // Set letter content
    letterContent.innerHTML = letter.content;

    // Show letter reading screen
    lettersScreen.style.animation = "fadeOut 0.5s ease forwards";

    setTimeout(() => {
      lettersScreen.style.display = "none";
      letterReading.style.display = "flex";
      letterReading.style.animation = "fadeIn 0.5s ease forwards";
    }, 500);
  }

  currentScreen = "reading";
}

// Back to letters
function backToLetters() {
  const letterReading = document.getElementById("letterReading");
  const lettersScreen = document.getElementById("lettersScreen");

  if (letterReading && lettersScreen) {
    letterReading.style.animation = "fadeOut 0.5s ease forwards";

    setTimeout(() => {
      letterReading.style.display = "none";
      lettersScreen.style.display = "block";
      lettersScreen.style.animation = "fadeIn 0.5s ease forwards";
    }, 500);
  }

  currentScreen = "letters";
}

// Add CSS for animations
const style = document.createElement("style");
style.textContent = `
@keyframes confetti-fall {
    0% {
        transform: translateY(-100vh) rotate(0deg);
        opacity: 1;
    }
    100% {
        transform: translateY(100vh) rotate(360deg);
        opacity: 0;
    }
}

/* CSS Variables for firework end positions */
:root {
    --end-x: 0px;
    --end-y: 0px;
}

/* Performance optimizations */
.panda, .date-part, .animated-title, .animated-subtitle {
    will-change: transform, opacity;
    backface-visibility: hidden;
}

/* Prevent initial flash */
.animation-screen, .menu-screen, .letters-screen, .letter-reading {
    opacity: 0;
    transform: translateY(20px);
    transition: all 0.3s ease;
}

.animation-screen[style*="display: flex"],
.menu-screen[style*="display: flex"],
.letters-screen[style*="display: block"],
.letter-reading[style*="display: flex"] {
    opacity: 1;
    transform: translateY(0);
}

/* Touch targets for mobile */
@media (max-width: 768px) {
    .menu-btn, .start-btn, .back-btn {
        min-height: 48px;
        min-width: 48px;
    }

    .letter-item {
        min-height: 120px;
    }
}
`;
document.head.appendChild(style);

// Handle window resize
window.addEventListener("resize", () => {
  isMobile = window.innerWidth <= 768;
  initializeMobileOptimizations();
});

// Handle browser back button
window.addEventListener("popstate", () => {
  // Handle navigation if needed
  console.log("Browser back button pressed");
});
