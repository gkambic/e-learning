export const mockCourses = [
    {
      id: 1,
      title: 'Curso de JavaScript',
      description: 'Aprende JavaScript desde cero',
      frequency: 2, // Frecuencia de desbloqueo en días
      videos: [
        { id: 1, title: 'Introducción a JS', url: 'https://www.youtube.com/watch?v=W6NZfCO5SIk', description: '' ,availableDate: "2024-09-19"},
        { id: 2, title: 'Variables y tipos de datos', url: '/videos/video2.mp4', description: '',availableDate: "2024-09-20" },
        { id: 3, title: 'Funciones y eventos', url: '/videos/video3.mp4', description: '',availableDate: "2024-09-25" }
      ],
      enrolledDate: new Date('2024-09-10') // Fecha de inscripción simulada
    },
    // Agrega más cursos según sea necesario
  ];
  