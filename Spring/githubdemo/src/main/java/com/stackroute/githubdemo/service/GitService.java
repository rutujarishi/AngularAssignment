package com.stackroute.githubdemo.service;

import com.stackroute.githubdemo.model.Git;

import java.util.List;

public interface GitService {
    public boolean saveRepo(Git repo);
    public List<Git> getAllRepo();
}