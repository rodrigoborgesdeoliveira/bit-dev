import React from 'react';
import classNames from 'classnames';
import { Image } from '@teambit/base-react.content.image';
import { Heading, Elements } from '@teambit/community.ui.heading';
import { Edge } from '@teambit/community.ui.graph.edge';
import { ComponentCardGraph, GridNode } from '@teambit/community.ui.graph.component-card-graph';
import { Component } from '@teambit/community.entity.compnent-distribution-graph';
import styles from './component-distribution.module.scss';
// @ts-ignore
import img from './shoe-store.png';

export type ComponentDistributionSectionProps = {
  /**
   * An object of features with title and text and icon props
   */
  components?: GridNode<Component>[];
  /**
   * Title of the section
   */
  title: string;
} & React.HTMLAttributes<HTMLDivElement>;

export function ComponentDistributionSection({
  title,
  components = [],
  className
}: ComponentDistributionSectionProps) {

  return (
    <div className={classNames(styles.buildSection, className)}>
      <div className={styles.heading}>
        <Heading element={Elements.H2} className={styles.title}>{title}</Heading>
      </div>
      {/* created a connecting element for edge curve effect */}
        <div id={top.attrId} />
        <Edge node={top} dependency={top.dependencies[0]} />
        <Edge node={top} dependency={top.dependencies[1]} />
      <div className={styles.content}>
        <ComponentCardGraph nodes={components} />
        <div />
        <div>
          <Image src={img} className={styles.appImg} id={image.attrId} />
          <Edge node={image} dependency={image.dependencies[0]}/>
          <Edge node={image} dependency={image.dependencies[1]} />
        </div>
      </div>
      {/* created a connecting element for edge curve effect */}
        <div id={bottom.attrId} />
        <Edge node={bottom} dependency={bottom.dependencies[0]} />
        <Edge node={bottom} dependency={bottom.dependencies[1]} />
    </div>
  );
}

const image = GridNode.fromPlain({
  id: 'teambit.image/image',
  dependencies: [
    'teambit.shoe-store/ui/pages/home',
    {
      id: 'teambit.shoe-store/ui/shoes/shoes-card-grid',
      edge: {
        end: 'right',
      },
    },
  ],
});

const top = GridNode.fromPlain({
  id: 'teambit.shoe-store/home-page-to-store-hero',
  dependencies: [
    {
      id: 'teambit.shoe-store/ui/pages/home',
      edge: {
        end: 'top',
        showHead: false
      },
    },
    {
      id: 'teambit.ecommerce/ui/store-hero',
      edge: {
        end: 'top',
      },
    },
  ],
});


const bottom = GridNode.fromPlain({
  id: 'teambit.shoe-store/shoes-card-grid-to-shoes-card',
  dependencies: [
    {
      id: 'teambit.shoe-store/ui/shoes/shoes-card-grid',
      edge: {
        end: 'bottom',
        showHead: false
      },
    },
    {
    id: 'teambit.shoe-store/ui/shoes/shoes-card',
    edge: {
      end: 'bottom',
      },
    },
  ],
});