package com.stackroute.githubdemo.repository;


import com.stackroute.githubdemo.model.Git;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface GitRepository extends MongoRepository<Git,String> { }
