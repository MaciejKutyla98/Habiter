import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** An RFC-3339 compliant date string */
  Date: any;
};

export type AuditRecord = {
  __typename?: 'AuditRecord';
  createdAt: Scalars['Date'];
  updatedAt: Scalars['Date'];
};

export type Habit = {
  __typename?: 'Habit';
  auditRecord: AuditRecord;
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  priority: HabitPriority;
};

export type HabitInput = {
  description?: InputMaybe<Scalars['String']>;
  idToUpdate?: InputMaybe<Scalars['ID']>;
  name: Scalars['String'];
  priority: HabitPriority;
};

export enum HabitPriority {
  High = 'HIGH',
  Low = 'LOW',
  Medium = 'MEDIUM'
}

export type Mutation = {
  __typename?: 'Mutation';
  createHabit: Habit;
  deleteHabit: Scalars['Boolean'];
  updateHabit: Habit;
};


export type MutationCreateHabitArgs = {
  input: HabitInput;
};


export type MutationDeleteHabitArgs = {
  idToDelete: Scalars['ID'];
};


export type MutationUpdateHabitArgs = {
  input: HabitInput;
};

export type Query = {
  __typename?: 'Query';
  habits: Array<Habit>;
};

export type HabitsQueryVariables = Exact<{ [key: string]: never; }>;


export type HabitsQuery = { __typename?: 'Query', habits: Array<{ __typename?: 'Habit', id: string, name: string, description?: string | null, priority: HabitPriority }> };

export type UpdateHabitMutationVariables = Exact<{
  habitInput: HabitInput;
}>;


export type UpdateHabitMutation = { __typename?: 'Mutation', updateHabit: { __typename?: 'Habit', id: string, priority: HabitPriority } };

export const HabitsDocument = gql`
    query Habits {
  habits {
    id
    name
    description
    priority
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class HabitsGQL extends Apollo.Query<HabitsQuery, HabitsQueryVariables> {
    override document = HabitsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const UpdateHabitDocument = gql`
    mutation UpdateHabit($habitInput: HabitInput!) {
  updateHabit(input: $habitInput) {
    id
    priority
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class UpdateHabitGQL extends Apollo.Mutation<UpdateHabitMutation, UpdateHabitMutationVariables> {
    override document = UpdateHabitDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }