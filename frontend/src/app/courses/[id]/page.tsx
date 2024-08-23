"use client";

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { mockCourses } from '../../../services/videoMock';

interface Course {
  id: number;
  title: string;
  description: string;
  duration: string;
  startDate: string;
  value: string;
  imageUrl: string;
}

export default function CourseDetailPage({ params }: { params: { id: string } }) {
  const { id } = params;
  const [course, setCourse] = useState<Course | null>(null);
  const router = useRouter();

  useEffect(() => {
    const foundCourse = mockCourses.find(course => course.id.toString() === id);
    setCourse(foundCourse || null);
  }, [id]);

  const handleEnrollClick = () => {
    router.push(`/enroll/${id}`);
  };

  if (!course) return <p>Loading...</p>;

  return (
    <main style={{ padding: '2em' }}>
      <h1>{course.title}</h1>
      <img src={course.imageUrl} alt={course.title} style={{ width: '100%', maxHeight: '400px', objectFit: 'cover' }} />
      <p><strong>Description:</strong> {course.description}</p>
      <p><strong>Duration:</strong> {course.duration}</p>
      <p><strong>Start Date:</strong> {course.startDate}</p>
      <p><strong>Value:</strong> {course.value}</p>
      <button
        onClick={handleEnrollClick}
        style={{
          padding: '0.8em 1.6em',
          fontSize: '1em',
          color: 'white',
          backgroundColor: '#0070f3',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          marginTop: '1em',
        }}
      >
        Enroll
      </button>
    </main>
  );
}
