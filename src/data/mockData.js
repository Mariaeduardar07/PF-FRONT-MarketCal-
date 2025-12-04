export const mockInfluencerTasks = {
  instagram: [
    {
      id: 1,
      image: "/image/logo.png",
      title: "Creating Awesome Mobile Apps",
      category: "UI/UX Design",
      progress: 100,
      timeLeft: "1 Hour",
      daysLeft: null,
      teamMembers: [
        "/image/logo.png",
        "/image/logo.png",
        "/image/logo.png",
        "/image/logo.png",
      ],
    },
    {
      id: 2,
      image: "/image/logo.png",
      title: "Creating Fresh Website",
      category: "Web Developer",
      progress: 65,
      timeLeft: "2 Hour",
      daysLeft: null,
      teamMembers: [
        "/image/logo.png",
        "/image/logo.png",
        "/image/logo.png",
        "/image/logo.png",
      ],
    },
    {
      id: 3,
      image: "/image/logo.png",
      title: "Creating Color Palettes",
      category: "UI/UX Design",
      progress: 100,
      timeLeft: "1 Hour",
      daysLeft: null,
      teamMembers: ["/image/logo.png", "/image/logo.png", "/image/logo.png"],
    },
    {
      id: 4,
      image: "/image/logo.png",
      title: "Awesome Project",
      category: "Web Development",
      progress: 78,
      timeLeft: "3 Hour",
      daysLeft: null,
      teamMembers: ["/image/logo.png", "/image/logo.png"],
    },
    {
      id: 13,
      image: "/image/logo.png",
      title: "Social Media Strategy",
      category: "Marketing",
      progress: 45,
      timeLeft: "5 Hour",
      daysLeft: null,
      teamMembers: ["/image/logo.png", "/image/logo.png", "/image/logo.png"],
    },
    {
      id: 14,
      image: "/image/logo.png",
      title: "Content Calendar Planning",
      category: "Content Strategy",
      progress: 82,
      timeLeft: "2 Hour",
      daysLeft: null,
      teamMembers: ["/image/logo.png", "/image/logo.png", "/image/logo.png", "/image/logo.png"],
    },
  ],
  twitter: [
    {
      id: 5,
      image: "/image/logo.png",
      title: "Creating Mobile App Design",
      category: "UI/UX Design",
      progress: 78,
      timeLeft: null,
      daysLeft: "3 Days Left",
      teamMembers: [
        "/image/logo.png",
        "/image/logo.png",
        "/image/logo.png",
        "/image/logo.png",
      ],
    },
    {
      id: 6,
      image: "/image/logo.png",
      title: "Creating Perfect Website",
      category: "Web Developer",
      progress: 95,
      timeLeft: null,
      daysLeft: "4 Days Left",
      teamMembers: [
        "/image/logo.png",
        "/image/logo.png",
        "/image/logo.png",
        "/image/logo.png",
      ],
    },
    {
      id: 7,
      image: "/image/logo.png",
      title: "Mobile App Design",
      category: "UI/UX Design",
      progress: 67,
      timeLeft: null,
      daysLeft: "3 Days Left",
      teamMembers: ["/image/logo.png", "/image/logo.png", "/image/logo.png"],
    },
    {
      id: 8,
      image: "/image/logo.png",
      title: "Creating Brand Identity",
      category: "Brand Designer",
      progress: 84,
      timeLeft: null,
      daysLeft: "1 Day Left",
      teamMembers: ["/image/logo.png", "/image/logo.png"],
    },
    {
      id: 15,
      image: "/image/logo.png",
      title: "Twitter Analytics Dashboard",
      category: "Data Analysis",
      progress: 60,
      timeLeft: null,
      daysLeft: "5 Days Left",
      teamMembers: ["/image/logo.png", "/image/logo.png", "/image/logo.png"],
    },
    {
      id: 16,
      image: "/image/logo.png",
      title: "Engagement Campaign",
      category: "Social Media",
      progress: 73,
      timeLeft: null,
      daysLeft: "2 Days Left",
      teamMembers: ["/image/logo.png", "/image/logo.png", "/image/logo.png", "/image/logo.png"],
    },
  ],
  linkedin: [
    {
      id: 9,
      image: "/image/logo.png",
      title: "Professional Network Campaign",
      category: "Marketing",
      progress: 72,
      timeLeft: null,
      daysLeft: "5 Days Left",
      teamMembers: [
        "/image/logo.png",
        "/image/logo.png",
        "/image/logo.png",
        "/image/logo.png",
      ],
    },
    {
      id: 10,
      image: "/image/logo.png",
      title: "B2B Content Strategy",
      category: "Content Marketing",
      progress: 88,
      timeLeft: null,
      daysLeft: "2 Days Left",
      teamMembers: [
        "/image/logo.png",
        "/image/logo.png",
        "/image/logo.png",
        "/image/logo.png",
      ],
    },
    {
      id: 11,
      image: "/image/logo.png",
      title: "Corporate Branding",
      category: "Brand Strategy",
      progress: 55,
      timeLeft: null,
      daysLeft: "6 Days Left",
      teamMembers: ["/image/logo.png", "/image/logo.png", "/image/logo.png"],
    },
    {
      id: 12,
      image: "/image/logo.png",
      title: "Lead Generation Campaign",
      category: "Digital Marketing",
      progress: 91,
      timeLeft: null,
      daysLeft: "1 Day Left",
      teamMembers: ["/image/logo.png", "/image/logo.png"],
    },
    {
      id: 17,
      image: "/image/logo.png",
      title: "Recruitment Campaign",
      category: "HR Marketing",
      progress: 50,
      timeLeft: null,
      daysLeft: "7 Days Left",
      teamMembers: ["/image/logo.png", "/image/logo.png", "/image/logo.png"],
    },
    {
      id: 18,
      image: "/image/logo.png",
      title: "Thought Leadership Series",
      category: "Content Creation",
      progress: 68,
      timeLeft: null,
      daysLeft: "4 Days Left",
      teamMembers: ["/image/logo.png", "/image/logo.png", "/image/logo.png", "/image/logo.png"],
    },
  ],
};

export const fetchInfluencerTasks = async (platform = null) => {
  await new Promise((resolve) => setTimeout(resolve, 100));

  if (platform) {
    return mockInfluencerTasks[platform] || [];
  }

  return mockInfluencerTasks;
};

export const fetchInfluencers = async (filter = "all") => {
  await new Promise((resolve) => setTimeout(resolve, 100));

  if (filter === "recent") {
    return mockInfluencers.recent;
  }

  return [...mockInfluencers.recent, ...mockInfluencers.all];
};

export const updateTaskProgress = async (taskId, newProgress) => {
  await new Promise((resolve) => setTimeout(resolve, 200));

  console.log(`Updating task ${taskId} progress to ${newProgress}%`);

  return { success: true, taskId, newProgress };
};
