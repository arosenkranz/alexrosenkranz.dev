import React from 'react';
import styles from './projects.module.scss';
import { CustomLink } from '../MDXComponents';

const Projects = ({ projects = [] }) => {
  return (
    <section className={styles['projects']}>
      <div className={styles['projects__wrapper']}>
        <h2>Projects</h2>
        {projects.map((project) => {
          return (
            <div key={project.title} className={styles['projects__item']}>
              <h3 className={styles['projects__item-title']}>{project.title}</h3>
              <div className={styles['projects__item-description']}>{project.description}</div>
              <div className={styles['projects__item-label']}>Built With</div>
              <ul className={styles['projects__item-list']}>
                {project.builtWith.map((item, i, arr) => (
                  <li key={item} className={styles['projects__item-listitem']}>
                    {item} {i === arr.length - 1 ? '' : '/'}
                  </li>
                ))}
              </ul>
              <div className={styles['projects__item-label']}>Links</div>
              <div className={styles['projects__item-links']}>
                <CustomLink href={project.repo} className={styles['projects__item-link']}>
                  GitHub Repo
                </CustomLink>
                {project.deployed && (
                  <CustomLink href={project.deployed} className={styles['projects__item-link']}>
                    Deployed Application
                  </CustomLink>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
