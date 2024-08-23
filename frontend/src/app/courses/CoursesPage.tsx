"use client";

import { useState } from 'react';
import CourseCard from './CourseCard';
import { mockCourses } from '../../services/videoMock';

export default function CoursesPage() {
  return (
    <main style={{ display: 'flex', flexWrap: 'wrap', gap: '1em', justifyContent: 'center' }}>
      {mockCourses.map(course => (
        <CourseCard key={course.id} {...course} />
      ))}
    </main>
  );
}
